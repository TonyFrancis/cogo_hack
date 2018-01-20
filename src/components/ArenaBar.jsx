import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import { FILTER_ACTION } from '../actions/index';

class ArenaBar extends Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      anchorEl: null,
    };
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (payload) => {
    this.setState({ anchorEl: null });
    this.props.updateScoreOrder(payload);
  };

  render() {
    let open = Boolean(this.state.anchorEl);
    console.log(this.props.filter)
    return (
      <AppBar position="static">
        <Toolbar>
          <Button
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="contrast"
          >
            Score
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={() => this.handleClose('ASCENDING')}>ASCENDING</MenuItem>
            <MenuItem onClick={() => this.handleClose('DESCENDING')}>DESCENDING</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }

}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  updateScoreOrder: (payload) => dispatch({
    type: FILTER_ACTION.SCORE_SORT,
    payload,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(ArenaBar);
