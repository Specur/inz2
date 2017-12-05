
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

class MainTable extends Component{
  constructor(props){
  super(props);
   this.state = {
     data: [],
     season: "2018-18",
     league: "SerieA "
   }
 }

 componentDidMount() {
   console.log(this.props.index)
    return fetch("http://localhost:8080/all")
      .then(response => response.json())
      .then(responseJson => {
      this.state.data=responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }

  render(){
    return(
      <div style={{width:"70%" , marginLeft:"15%", marginTop:"2%"}}>
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
