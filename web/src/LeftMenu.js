import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

export default class DrawerSimpleExample extends React.Component {

  handleChangeSingle = (value) => {
    this.setState({
      valueSingle: value,
    });
    this.props.cha.props.cha.refs.child.update();
    this.handleToggle();
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      index: 0,
      valueSingle: 0
    };
  }
  handleToggle = () => this.setState(
    {
      open: !this.state.open,

    }

  );

  render() {
    return (
      <div>
        <Drawer open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({open})}>

          <MenuItem value="0" onClick={() => this.handleChangeSingle(0)}>Check Team</MenuItem>
          <MenuItem value="1" onClick={() => this.handleChangeSingle(1)}>Check Coupon</MenuItem>
          <MenuItem value="2" onClick={() => this.handleChangeSingle(2)}>Check Table</MenuItem>

        </Drawer>
      </div>
    );
  }
}
