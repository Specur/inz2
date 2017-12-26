
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Card from './Card.js';


class Button extends Component{
  state = {
    data: [],
    index:0
  };

  download(league,team) {
     return fetch("http://localhost:8080/team?name="+league+"&teamName="+team)
       .then(response => response.json())
       .then(responseJson => {
         var arrayvar = this.state.data;
         arrayvar.push(responseJson);
         this.setState({data:arrayvar})
       console.log(this.state.data)
       })
       .catch(error => {
         console.error(error);
       });
   }

  componentDidMount(){
    this.props.upd();
    this.checkTeamToSearch();
  };

  checkTeamToSearch = () =>{
    if(this.props.prem.length>2){
      this.setState({index:0})
      this.props.prem.map((object, i) => {
        if(object.Team1!= undefined){
          this.download("premierLeague",object.Team1)
          this.download("premierLeague",object.Team2)
          this.setState({index:this.state.index+1})
        }

      }),
      this.props.seri.map((object, i) => {
        if(object.Team1!= undefined){
          this.download("SerieA",object.Team1)
          this.download("SerieA",object.Team2)
          this.setState({index:this.state.index+1})
        }

      }),
      this.props.bundes.map((object, i) => {
        if(object.Team1!= undefined){
          this.download("bundesliga",object.Team1)
          this.download("bundesliga",object.Team2)
          this.setState({index:this.state.index+1})
        }
      })
    }
  }

  render(){
    if(this.state.index>0 && this.state.data.length>0){
    return(
      <tbody>
      {this.state.data.map((object, i) => {
        console.log(object)
          return <Card/>;
      })}

      </tbody>
    )
  }else{
    return(
      <div>ooo</div>
    )
  }
  }
  }

export default Button;