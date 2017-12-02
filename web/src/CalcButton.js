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
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
    return(
  <div>
    <RaisedButton
      label="Oblicz"
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
        title="Twój kupon :"
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
      66% na wygraną ....
      </Dialog>
    </div>
  </div>
)
}
}

export default Button;
