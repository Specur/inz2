import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import SelectComponent from './SelectComponent.js';


export default class DropDownMenuLongMenuExample extends Component {
  state = {
    value: 10,
    data: [],
    index: [this.props.league],
    addToCheck:[{id:1},{id:0},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}]
  };


   addCont = () => {
     this.state.index.push(this.props.league);
     this.setState({index:this.state.index})
   }

   addCheck = (id,Team1,Win,Draw,Lose,Team2) => {
       this.setState({addToCheck: this.state.addToCheck.map(
           (el)=> el.id === id ? Object.assign({}, el,
             {id:id,Team1:Team1,Win:Win,Draw:Draw,Lose:Lose,Team2:Team2}) : el)
       },() => this.props.update2());
   }

  render() {

        return(
        <tbody>
        {this.state.index.map((object, i) => {
            return <SelectComponent league={object} update={this.props.update}
                    id={i} addCheck={this.addCheck}/>;
        })}

        <FloatingActionButton style={{marginLeft:'5%'}} onClick={this.addCont}>
          <ContentAdd />
        </FloatingActionButton>
        </tbody>
    )


  }
}
