import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import SelectComponent from './SelectComponent.js';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

  const style = {
    height: 500,
    width: 850,
    marginLeft: 220,
    marginTop: 25,
    float: 'left',
    stamp: 1000
  };

export default class DropDownMenuLongMenuExample extends Component {
  componentDidMount(){
    this.interval = setInterval(() => this.setState({ time: this.createData() }), this.state.stamp);
  };

componentWillUnmount() {
  clearInterval(this.interval);
}
  state = {
    data: [],
    team1: ' ',
    team2: ' ',
    board: 0,
    goals5: 0,
    statsL: 0,
    stats5: 0,
    goalsL: 0,
    goalsLl:0,
    goals5l:0,
    percent: 0,
    team1Points:0,
    team2Points:0,

    win: 0,
    draw: 0,
    lose: 0,

    t1g5:0,
    t2g5:0,
    t1s5:0,
    t2s5:0,
    t1b:0,
    t2b:0,
    t1sl:0,
    t2sl:0,
    t1gl:0,
    t2gl:0,
    t1gll:0,
    t2gll:0,
    t1gl5:0,
    t2gl5:0

  };

    calculate = () =>{



      this.setState({team1Points:(this.state.t1b*this.state.board)+
                                 (this.state.t1g5*this.state.goals5)+
                                 (this.state.t1sl*this.state.statsL)+
                                 (this.state.t1s5*this.state.stats5)+
                                 (this.state.t1gl*this.state.goalsL)+
                                 (this.state.t1gll*this.state.goalsL)+
                                 (this.state.t1gl5*this.state.goals5l)
                               }, () =>

  this.setState({team2Points:(this.state.t2b*this.state.board)+
                             (this.state.t2g5*this.state.goals5)+
                             (this.state.t2sl*this.state.statsL)+
                             (this.state.t2s5*this.state.stats5)+
                             (this.state.t2gl*this.state.goalsL)+
                             (this.state.t2gll*this.state.goalsL)+
                             (this.state.t2gl5*this.state.goals5l)
                           },() =>


  {
var w = 0;
var d = 0;
var l = 0;
    for (let x=0; x<100; x++) {
      var point1 = this.rand(0,this.state.team1Points);
      var point2 = this.rand(0,this.state.team2Points);

      if(Math.abs(point1-point2)< point1*this.state.percent){
        d = d +1;

      }else if(point1>point2){
        w = w + 1;
      }else{
        l = l+ 1;
      }
    }
    this.setState({draw:d})
    this.setState({win:w})
    this.setState({lose:l})
  }

),)
}




  rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

  createData = () =>{
    this.setState({data:[]})
    if(this.props.object != undefined && this.props.object2 != undefined){

      this.setState({team1:this.props.object.team})
      this.setState({team2:this.props.object2.team})

      this.state.data.push({stats:"Zwycięstwa ostatnie 5 meczów:",team1:this.props.object.l5mWin,team2:this.props.object2.l5mWin})
      this.state.data.push({stats:"Remisy ostatnie 5 meczów:",team1:this.props.object.l5mDraw,team2:this.props.object2.l5mDraw})
      this.state.data.push({stats:"Porażki ostatnie 5 meczów:",team1:this.props.object.l5mLose,team2:this.props.object2.l5mLose})

      this.setState({t1s5:this.props.object.l5mWin*3+this.props.object.l5mDraw})
      this.setState({t2s5:this.props.object2.l5mWin*3+this.props.object2.l5mDraw})

      this.setState({t1b:this.props.object.lSeasonMWinAsMaster*3+this.props.object.lSeasonMDrawAsMaster})
      this.setState({t2b:this.props.object2.lSeasonMWinAsGuest*3+this.props.object2.lSeasonMDrawAsGuest})

      this.setState({t1g5:this.props.object.l5mGoalsShot})
      this.setState({t2g5:this.props.object2.l5mGoalsShot})

      this.setState({t1sl:this.props.object.lSeasonmWin*3+this.props.object.lSeasonmDraw})
      this.setState({t2sl:this.props.object2.lSeasonmWin*3+this.props.object2.lSeasonmDraw})

      this.setState({t1gl:this.props.object.lSeasonmGoalsShot})
      this.setState({t2gl:this.props.object2.lSeasonmGoalsShot})

      this.setState({t1gll:this.props.object.lSeasonmGoalsLost})
      this.setState({t2gll:this.props.object2.lSeasonmGoalsLost})


      this.state.data.push({stats:"Strzelone gole ostatnie 5 meczów:",team1:this.props.object.l5mGoalsShot,team2:this.props.object2.l5mGoalsShot})
      this.state.data.push({stats:"Stracone gole ostatnie 5 meczów:",team1:this.props.object.l5mGoalsLost,team2:this.props.object2.l5mGoalsLost})


      this.state.data.push({stats:"Zwycięstwa ostatni sezon:",team1:this.props.object.lSeasonmWin,team2:this.props.object2.lSeasonmWin})
      this.state.data.push({stats:"Remisy ostatni sezon:",team1:this.props.object.lSeasonmDraw,team2:this.props.object2.lSeasonmDraw})
      this.state.data.push({stats:"Porażki ostatni sezon:",team1:this.props.object.lSeasonmLose,team2:this.props.object2.lSeasonmLose})

      this.state.data.push({stats:"Strzelone gole ostatni sezon:",team1:this.props.object.lSeasonmGoalsShot,team2:this.props.object2.lSeasonmGoalsShot})
      this.state.data.push({stats:"Stracone gole ostatnii sezon:",team1:this.props.object.lSeasonmGoalsLost,team2:this.props.object2.lSeasonmGoalsLost})



      this.state.data.push({stats:"Zwycięstwa ostatni sezon jako gospodarz:",team1:this.props.object.lSeasonMWinAsMaster,team2:this.props.object2.lSeasonMWinAsMaster})
      this.state.data.push({stats:"Remisy ostatni sezon jako gospodarz:",team1:this.props.object.lSeasonMDrawAsMaster,team2:this.props.object2.lSeasonMDrawAsMaster})
      this.state.data.push({stats:"Porażki ostatni sezon jako gospodarz:",team1:this.props.object.lSeasonMLoseAsMaster,team2:this.props.object2.lSeasonMLoseAsMaster})


      this.state.data.push({stats:"Zwycięstwa ostatni sezon jako gość:",team1:this.props.object.lSeasonMWinAsGuest,team2:this.props.object2.lSeasonMWinAsGuest})
      this.state.data.push({stats:"Remisy ostatni sezon jako gość:",team1:this.props.object.lSeasonMDrawAsGuest,team2:this.props.object2.lSeasonMDrawAsGuest})
      this.state.data.push({stats:"Porażki ostatni sezon jako gość:",team1:this.props.object.lSeasonMLoseAsGuest,team2:this.props.object2.lSeasonMLoseAsGuest})


      this.state.data.push({stats:"zwycięstwa",team1:this.props.object.win,team2:this.props.object2.win})
      this.state.data.push({stats:"remisy",team1:this.props.object.draw,team2:this.props.object2.draw})
      this.state.data.push({stats:"porażki",team1:this.props.object.lose,team2:this.props.object2.lose})

    clearInterval(this.interval);
      console.log(console.log(this.props))
    }




    if(this.props.object === undefined && this.props.object2 != undefined){
      this.state.data.push({stats:"zwycięstwa",team1:0,team2:this.props.object2.win})
      console.log("2")
    }


    if(this.props.object != undefined && this.props.object2 === undefined){
      this.state.data.push({stats:"zwycięstwa",team1:this.props.object.win,team2:0})
      console.log("3")
}

    if(this.props.object === undefined && this.props.object2 === undefined){
      this.state.data.push({stats:"zwycięstwa",team1:0,team2:0})
    }

      return 0;
  }

  slider1 = (event, value) => {
    this.setState({board: value},() => this.calculate());
  };
  slider2 = (event, value) => {
    this.setState({goals5: value},() => this.calculate());
  };
  slider3 = (event, value) => {
    this.setState({percent: value},() => this.calculate());
  };
  slider4 = (event, value) => {
    this.setState({stats5: value},() => this.calculate());
  };
  slider5 = (event, value) => {
    this.setState({statsL: value},() => this.calculate());
  };
  slider6 = (event, value) => {
    this.setState({goalsL: value},() => this.calculate());
  };
  slider7 = (event, value) => {
    this.setState({goalsLl: value},() => this.calculate());
  };
  slider8 = (event, value) => {
    this.setState({goals5l: value},() => this.calculate());
  };


  render() {
    console.log(this.state.win)
        return(
        <Paper style={style} zDepth={1}>
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.board}
                onChange={this.slider1}
                />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.goals5}
          onChange={this.slider2}
        />
        <Slider
          min={0.01}
          max={0.99}
          step={0.01}
          value={this.state.percent}
          onChange={this.slider3}
        />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.stats5}
          onChange={this.slider4}
        />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.statsL}
          onChange={this.slider5}
        />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.goalsL}
          onChange={this.slider6}
        />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.goalsLl}
          onChange={this.slider7}
        />
        <Slider
          min={0}
          max={10}
          step={1}
          value={this.state.goals5l}
          onChange={this.slider8}
        />






        <Table
        height={500}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip="Statystyki">statystyki</TableHeaderColumn>
              <TableHeaderColumn tooltip="Gospodarze">{this.state.team1}</TableHeaderColumn>
              <TableHeaderColumn tooltip="Goście">{this.state.team2}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          >
            {this.state.data.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.stats}</TableRowColumn>
                <TableRowColumn>{row.team1}</TableRowColumn>
                <TableRowColumn>{row.team2}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        {100/this.state.win}"  "
        {100/this.state.draw}"  "
        {100/this.state.lose}
        </Paper>
    )


  }
}
