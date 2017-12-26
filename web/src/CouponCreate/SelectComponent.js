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
    valid:  false
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
      this.setState({valid:true}, () => this.props.addCheck(this.props.id,this.state.value,1,2,3,this.state.value1))
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

  render() {
    return (
      <div>
      <SelectField
       value={this.state.value}
       onChange={this.handleChange}
       maxHeight={200}
       style={{marginLeft:'20%',marginRight:'2%'}}
      errorText={!this.state.valid && 'Musisz wybrać druzyne'}
     >
      {this.menuItems()}
     </SelectField>

          <TextField
            hintText="Win"
            type="number"
            style={{width:'5%', marginLeft:'1%'}}
          />

          <TextField
              hintText="Draw"
              type="number"
                style={{width:'5%', marginLeft:'1%'}}
          />

          <TextField
              hintText="Win"
              type="number"
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
