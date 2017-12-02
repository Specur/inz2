import React, { Component } from 'react';
import TopMenu from './TopMenu.js';
import CalcButton from './CalcButton.js';
import AppBar from './AppBar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
      <AppBar/>
      </MuiThemeProvider>

      <MuiThemeProvider>
      <TopMenu/>
      </MuiThemeProvider>

      <MuiThemeProvider>
      <CalcButton/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
