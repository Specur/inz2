
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
    team: [],
    cours: [],
    index:0
  };

  download(league,team) {
    var arrayvar = this.state.data;
      fetch("http://localhost:8080/team?name="+league+"&teamName="+team)
       .then(response => response.json())
       .then(responseJson => {
          arrayvar.push(responseJson);
          this.setState({data:arrayvar})
       })
       .catch(error => {
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
        var cour= this.state.cours;
        if(object.Team1!= undefined){
        cour.push({win:object.Win,lose:object.Lose,draw:object.Draw})
        this.download("premierLeague",object.Team1)
        this.download("premierLeague",object.Team2)
        this.setState({index:this.state.index+1},() => this.setState({cours:cour}))

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
    if(this.state.data != undefined && this.state.index>0 && this.state.data.length>0){
    return(
      <div style={{width:'100%', height:'100%'}}>
      <tbody style={{width:'100%', height:'100%'}}>
      {this.state.data.map((object, i,array) => {
        if(i%2===0){
          var index = i/2;
          return <Card object={array[i]} object2={array[i+1]} cours={this.state.cours} index={index}/>;
        }
      }
    )
  }

      </tbody>
      </div>
    )
  }else{
    return(
      <div>ooo</div>
    )
  }
  }
  }

export default Button;
