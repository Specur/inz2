import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Table from './HistoryTable/HistoryTable.js';
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SeasonButton from './HistoryTable/SeasonButton.js'

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
      change: 0,
      ind: 0
    };
  }

  handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

    update = () =>{
      this.setState({
        ind:this.props.tkk.change.change.state.valueSingle,
      });

    }


    componentDidMount(){
      this.state.ind = this.props.tkk.change.change.state.valueSingle;
    }


render()
{
  if(this.state.ind === 2){
  return(
    <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab style={{backgroundColor:'#717171'}} label="Premier League" value={0} />
          <Tab style={{backgroundColor:'#717171'}} label="La Liga" value={1} />
          <Tab style={{backgroundColor:'#717171'}} label="Serie A" value={2} />
          <Tab style={{backgroundColor:'#717171'}} label="Bundes Liga" value={3} />
        </Tabs>
        <SeasonButton/>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Table index={"bundesliga"}/>
          </div>
          <div >
            <Table index={"ChampionsLeague"}/>
          </div>
          <div >
            <Table index={"premierLeague"}/>
          </div>
          <div >
            <Table index={"SerieA"}/>
          </div>
        </SwipeableViews>
      </div>
)
}

if(this.state.ind === 0){
return(
  <div></div>
)
}
if(this.state.ind === 1){
return(
  <div>
    dwodmw
    </div>
)
}
}

}

export default TopTabs;
