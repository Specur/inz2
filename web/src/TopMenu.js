import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Table from './Table.js';
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};
class TopTabs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

render()
{
  return(
    <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab style={{backgroundColor:'#717171'}} label=" Premier League" value={0} />
          <Tab style={{backgroundColor:'#717171'}} label="La Liga" value={1} />
          <Tab style={{backgroundColor:'#717171'}} label="Serie A" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Table/>
          </div>
          <div >
            <Table/>
          </div>
          <div >
            <Table/>
          </div>
        </SwipeableViews>
      </div>
)
}

}

export default TopTabs;
