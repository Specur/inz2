import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LeftMenu from './LeftMenu.js'

class AppBarM extends Component{
  constructor(props) {
    super(props);
    this.changeIt = this.changeIt.bind(this);
  }

  changeIt() {
    // Explicitly focus the text input using the raw DOM API
    this.change.handleToggle();
  }


  render(){

    return(
      <div>
      <AppBar
        title="BetCalc"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.changeIt}
      />
      <LeftMenu ref={(change) => { this.change = change; }}/>
      </div>
    );
  }
}


export default AppBarM;
