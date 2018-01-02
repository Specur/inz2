import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';


export default class DropDownMenuLongMenuExample extends Component {
  state = {
    value:  null,
    value1: null,
    data:   [],
    valid:  false,
    win: 0,
    draw:0,
    lose:0
  };

  handleChange = (event, index, value) => {
    this.setState({value:value},() => this.update());
    this.setState({value:value},() => this.checkValid());
  };
  handleChange2 = (event, index, value) => {
    this.setState({value1:value},() => this.update());
    this.setState({value1:value},() => this.checkValid());
  };

  update = () => {
    this.props.update();
  };

  checkValid= () =>{
    if(this.state.value!= null && this.state.value1!= null){
      this.setState({valid:true}, () => this.props.addCheck(this.props.id,this.state.value,this.state.win,this.state.draw,this.state.lose,this.state.value1))
    }
  }
  menuItems() {
    if(this.state.data.length>2){
      return this.state.data.map((name) => (
        <MenuItem
          key={name}
          insetChildren={true}
          value={name}
          primaryText={name}
        />
      ));
    }
    }

  componentDidMount() {
     return fetch("http://localhost:8080/getTeam?name="+this.props.league)
       .then(response => response.json())
       .then(responseJson => {
         this.setState({data:responseJson})
       })
       .catch(error => {
         console.error(error);
       });
   }
   win = (obj, newValue) =>{
     this.setState({win:newValue})
   }
   draw = (obj, newValue) =>{
     this.setState({draw:newValue})
   }
   lose = (obj, newValue) =>{
     this.setState({lose:newValue})
   }

  render() {
    return (
      <div>
      <SelectField
       value={this.state.value}
       onChange={this.handleChange}
       maxHeight={200}
       style={{marginLeft:'26%',marginRight:'2%'}}
      errorText={!this.state.valid && 'Musisz wybrać druzyne'}
     >
      {this.menuItems()}
     </SelectField>

          <TextField
            hintText="1"
            type="number"
            value={this.state.win}
            style={{width:'5%', marginLeft:'1%'}}
            onChange={this.win}
          />

          <TextField
              hintText="1/2"
              type="number"
              value={this.state.draw}
                style={{width:'5%', marginLeft:'1%'}}
                onChange={this.draw}
          />

          <TextField
              hintText="2"
              type="number"
              value={this.state.lose}
              onChange={this.lose}
                style={{width:'5%', marginLeft:'1%'}}
          />

     <SelectField
      value={this.state.value1}
      onChange={this.handleChange2}
      maxHeight={200}
      style={{marginLeft:'2%'}}
       errorText={!this.state.valid && 'Musisz wybrać druzyne'}
    >
     {this.menuItems()}
    </SelectField>
    </div>
    );
  }
}
