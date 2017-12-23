
import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FlatButton from 'material-ui/FlatButton'

class MainTable extends Component{
  constructor(props){
  super(props);
   this.state = {
     data: [],
     season: "2017-18",
     league: "SerieA "
   }
 }

 componentDidMount() {
    return fetch("http://localhost:8080/all?name="+this.props.index+"&date="+this.state.season)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({data:responseJson})
      })
      .catch(error => {
        console.error(error);
      });
  }

  reRender = () =>{
    return fetch("http://localhost:8080/all?name="+this.props.index+"&date="+this.state.season)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({data:responseJson})
      })
      .catch(error => {
        console.error(error);
      });
  }

  changeSeason = (value) =>{
    this.setState({season:value},() => this.reRender());
  }

  render(){
    return(
      <div style={{width:"70%" , marginLeft:"15%", marginTop:"2%"}}>
      <div style={{textAlign:'center', marginTop:'1%'}}>
        <FlatButton label="2017-18" style={{marginLeft:'1%'}} primary={true} onClick = {() => this.changeSeason("2017-18")}/>
        <FlatButton label="2016-17" style={{marginLeft:'1%'}} primary={true} onClick = {() => this.changeSeason("2016-17")}/>
        <FlatButton label="2015-16" style={{marginLeft:'1%'}} primary={true} onClick = {() => this.changeSeason("2015-16")}/>
        <FlatButton label="2014-15" style={{marginLeft:'1%'}} primary={true} onClick = {() => this.changeSeason("2014-15")}/>
        <br />
      </div>
        <ReactTable
        data={this.state.data}
        filterable
          columns={[
            {
              Header: "Name",
              accessor: "master"
            },
            {
              Header: "Guest",
              accessor: "guest"
            },
            {
              Header: "goal master",
              accessor: "gmaster"
            },
            {
              Header: "goal guest",
              accessor: "gguest"
            },
              ]
            }

          defaultPageSize={15}
          className="-striped -highlight"
        />
        <br />
      </div>
    )
  }

}
export default MainTable;
