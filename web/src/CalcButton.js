import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  button: {
    margin: 12,
    width: '60%',
    marginLeft: '20%'

  },
};


class Button extends Component{

    state = {
      open: false,
      data: [],
    };

  click = () => {
    console.log(this.props)
    if(this.props.team != undefined){

     return fetch("http://localhost:8080/team?name="+this.props.league+"&teamName="+this.props.team)
       .then(response => response.json())
       .then(responseJson => {
       this.setState({data:responseJson})
       console.log(this.state.data)
       })
       .catch(error => {
         console.error(error);
       });
     }
   };


  handleOpen = () => {
    this.setState({open: true}, () => this.click());
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
    return(
  <div>
    <RaisedButton
      label="Pokaż"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      backgroundColor={'#00bcd4'}
      labelColor={'#FFFFFF'}
      onClick={this.handleOpen}
    >
    </RaisedButton>
    <div>
      <Dialog
        title="Statystyki :"
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
      <b>Drużyna: {this.props.team}</b><br/>
      <b>Ostatnie 5 meczów  :</b> <br/>
          W/D/L : {this.state.data.l5mWin}/{this.state.data.l5mDraw}/{this.state.data.l5mLose}<br/>
          Strzelone/stracone gole : {this.state.data.l5mGoalsShot}/{this.state.data.l5mGoalsLost}<br/><br/>
      <b>Poprzedni sezon :</b> <br/>
          W/D/L : {this.state.data.lSeasonmWin}/{this.state.data.lSeasonmDraw}/{this.state.data.lSeasonmLose}<br/>
          Strzelone/stracone gole : {this.state.data.lSeasonmGoalsShot}/{this.state.data.lSeasonmGoalsLost}<br/>
          W/D/L jako gospodarz : {this.state.data.lSeasonMWinAsMaster}/{this.state.data.lSeasonMDrawAsMaster}/{this.state.data.lSeasonMLoseAsMaster}<br/>
          W/D/L jako gość : {this.state.data.lSeasonMWinAsGuest}/{this.state.data.lSeasonMDrawAsGuest}/{this.state.data.lSeasonMLoseAsGuest}<br/><br/>
      <b>Od sezonu 2014/2015 :</b> <br/>
          W/D/L : {this.state.data.win}/ {this.state.data.draw}/{this.state.data.lose}<br/>
          W/D/L jak gospodarz: {this.state.data.winAsMaster}/ {this.state.data.drawAsMaster}/{this.state.data.loseAsMaster}<br/>
          W/D/L jak gość: {this.state.data.winAsGuest}/ {this.state.data.drawAsGuest}/{this.state.data.loseAsGuest}<br/>
          Strzelone/Stracone gole : {this.state.data.goalsShot}/{this.state.data.goalsLose}<br/><br/>



      </Dialog>
    </div>
  </div>
)
}
}

export default Button;
