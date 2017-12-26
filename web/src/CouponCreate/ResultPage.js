
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class Button extends Component{


  render(){
    console.log(this)
    return(
      <div>
        <Paper  zDepth={1} />
        <Paper  zDepth={2} />
        <Paper  zDepth={3} />
        <Paper  zDepth={4} />
        <Paper  zDepth={5} />
      </div>
)
}
}

export default Button;
