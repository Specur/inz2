import React, { Component } from 'react';
import TopMenu from './TopMenu.js';
import CalcButton from './CalcButton.js';
import AppBar from './AppBar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
      <MuiThemeProvider>
      <AppBar ref={(change) => { this.change = change; }} cha={this}/>
      </MuiThemeProvider>

      <MuiThemeProvider>
      <TopMenu tkk={this} ref="child"/>
      </MuiThemeProvider>

      <MuiThemeProvider>
      <CalcButton/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
