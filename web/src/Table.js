import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class MainTable extends Component{

  render(){
    return(
      <Table
        multiSelectable={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Gospodarze</TableHeaderColumn>
            <TableHeaderColumn>Goście</TableHeaderColumn>
            <TableHeaderColumn>Godzina</TableHeaderColumn>
            <TableHeaderColumn>Gospodarze</TableHeaderColumn>
            <TableHeaderColumn>Remis</TableHeaderColumn>
            <TableHeaderColumn>Goście</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
        stripedRows={true}>
          <TableRow>
            <TableRowColumn>Legia Warszawa</TableRowColumn>
            <TableRowColumn>Piast GLiwice</TableRowColumn>
            <TableRowColumn>13:45</TableRowColumn>
            <TableRowColumn>2.0</TableRowColumn>
            <TableRowColumn>2.4</TableRowColumn>
            <TableRowColumn>2.8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Lech Poznań</TableRowColumn>
            <TableRowColumn>Arka Gdynia</TableRowColumn>
            <TableRowColumn>13:45</TableRowColumn>
            <TableRowColumn>2.1</TableRowColumn>
            <TableRowColumn>2.6</TableRowColumn>
            <TableRowColumn>2.9</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Legia Warszawa</TableRowColumn>
            <TableRowColumn>Piast GLiwice</TableRowColumn>
            <TableRowColumn>13:45</TableRowColumn>
            <TableRowColumn>2.0</TableRowColumn>
            <TableRowColumn>2.4</TableRowColumn>
            <TableRowColumn>2.8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Lech Poznań</TableRowColumn>
            <TableRowColumn>Arka Gdynia</TableRowColumn>
            <TableRowColumn>13:45</TableRowColumn>
            <TableRowColumn>2.1</TableRowColumn>
            <TableRowColumn>2.6</TableRowColumn>
            <TableRowColumn>2.9</TableRowColumn>
          </TableRow>

        </TableBody>
      </Table>)
  }

}
export default MainTable;
