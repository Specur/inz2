import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



export default class DropDownMenuLongMenuExample extends Component {
  state = {
    value: 10,
    data: [],
  };

  handleChange = (event, index, value) => {
    this.setState({value:value},() => this.update());

  };

  update = () => {
    this.props.update();
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
      <SelectField
       value={this.state.value}
       onChange={this.handleChange}
       maxHeight={200}
       style={{marginLeft:'40%'}}
     >
      {this.menuItems()}
     </SelectField>
    );
  }
}
