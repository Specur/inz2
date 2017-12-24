import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Table from './HistoryTable/HistoryTable.js';
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import CalcButton from './CalcButton.js'
import SelectTeam from './CheckTeam/SelectTeam.js'
import SelectTeamCoupon from './CouponCreate/SelectTeam.js'

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
      ind: 0,
      teamPrem: '',
      teamSeri: '',
      teamBundes: ''

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
      if(this.refs.prem != undefined){
      this.setState({teamPrem:this.refs.prem.state.value})
      this.setState({teamSeri:this.refs.seri.state.value})
      this.setState({teamBundes:this.refs.bundes.state.value})
    }

    }


    componentDidMount(){
      this.state.ind = this.props.tkk.change.change.state.valueSingle;
      if(this.refs.prem != undefined){
      this.setState({teamPrem:this.refs.prem.state.value})
      this.setState({teamSeri:this.refs.prem.state.value})
      this.setState({teamBundes:this.refs.prem.state.value})
    }
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
          <Tab style={{backgroundColor:'#717171'}} label="Bundes Liga" value={0} />
          <Tab style={{backgroundColor:'#717171'}} label="Premier League" value={1} />
          <Tab style={{backgroundColor:'#717171'}} label="Serie A" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Table index={"bundesliga"}/>
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
  <div>
  <div>
      <Tabs
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab style={{backgroundColor:'#717171'}} label="Premier League" value={0} />
        <Tab style={{backgroundColor:'#717171'}} label="Serie A" value={1} />
        <Tab style={{backgroundColor:'#717171'}} label="Bundes Liga" value={2} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div>
        <SelectTeam league={"premierLeague"} ref="prem" update={this.update}/>
        <CalcButton league={"premierLeague"} team={this.state.teamPrem}/>
        </div>

        <div >
        <SelectTeam league={"SerieA"} ref="seri" update={this.update}/>
        <CalcButton league={"SerieA"} team={this.state.teamSeri}/>
        </div>

        <div >
        <SelectTeam league={"bundesliga"} ref="bundes" update={this.update}/>
        <CalcButton league={"bundesliga"} team={this.state.teamBundes}/>
        </div>

      </SwipeableViews>
    </div>
  </div>
)
}
if(this.state.ind === 1){
return(
  <div>
  <div>
      <Tabs
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab style={{backgroundColor:'#717171'}} label="Premier League" value={0} />
        <Tab style={{backgroundColor:'#717171'}} label="Serie A" value={1} />
        <Tab style={{backgroundColor:'#717171'}} label="Bundes Liga" value={2} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div>
        <SelectTeamCoupon league={"premierLeague"} ref="prem" update={this.update}/>
        <CalcButton league={"premierLeague"} team={this.state.teamPrem}/>
        </div>

        <div >
        <SelectTeamCoupon league={"SerieA"} ref="seri" update={this.update}/>
        <CalcButton league={"SerieA"} team={this.state.teamSeri}/>
        </div>

        <div >
        <SelectTeamCoupon league={"bundesliga"} ref="bundes" update={this.update}/>
        <CalcButton league={"bundesliga"} team={this.state.teamBundes}/>
        </div>

      </SwipeableViews>
    </div>
  </div>
)
}
}

}

export default TopTabs;
