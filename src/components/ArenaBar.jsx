import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Refresh from 'material-ui-icons/Refresh';
import Toolbar from 'material-ui/Toolbar';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { FILTER_ACTION } from '../actions/index';

/**
 * ArenaBar is menubar for the Dashboard
 * it is link to redux filter state.
 * Here we can manipulate filters.
 * @extends Component
 */
class ArenaBar extends Component {
  constructor(props) {
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateTitleSearch = this.updateTitleSearch.bind(this);
    this.state = {
      anchorEl: null,
      platformEl: null,
      title: props.filter.title,
    };
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (payload) => {
    this.setState({ anchorEl: null });
    this.props.updateScoreOrder(payload);
  };

  handlePlatformMenu = event => {
    this.setState({ platformEl: event.currentTarget });
  }

  handlePlatformClose = (payload) => {
    this.setState({ platformEl: null });
    this.props.updatePlatFormChoice(payload);
  }
  updateTitleSearch = (e) => {
    this.setState({ title: e.target.value}, () => this.props.updateTitleSearch(this.state.title))
  }
  render() {
    let open = Boolean(this.state.anchorEl);
    let openPlatform = Boolean(this.state.platformEl);
    return (

      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xg={12} sm={4} lg={3}>
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
            </Grid>
            <Grid item xg={12} sm={4} lg={3}>
              <Button
                aria-owns={openPlatform ? 'platform-appbar' : null}
                aria-haspopup="true"
                onClick={this.handlePlatformMenu}
                color="contrast">
                Platform
              </Button>
              <Menu
                id="platform-appbar"
                anchorEl={this.state.platformEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openPlatform}
                onClose={this.handlePlatformClose}
              >
                <MenuItem onClick={() => this.handlePlatformClose('ALL')}>ALL</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('PC')}>PC</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('Xbox 360')}>Xbox 360</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('PlayStation 3')}>PlayStation 3</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('Macintosh')}>Macintosh</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('iPhone')}>iPhone</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('iPad')}>iPad</MenuItem>
                <MenuItem onClick={() => this.handlePlatformClose('Nintendo 3DS')}>
                  Nintendo 3DS
                </MenuItem>
                  <MenuItem onClick={() => this.handlePlatformClose('iPad')}>iPad</MenuItem>
              </Menu>
            </Grid>
            <Grid item xg={12} sm={4} lg={3}>
              <TextField
                label="Title"
                value={this.state.title}
                onChange={this.updateTitleSearch}
                placeholder="Search Title"
              />
            </Grid>
            <Grid item xg={12} sm={4} lg={3}>
              <div style={{ float: 'right'}}>
                <Refresh style={{ float: 'right'}} onClick={this.props.onRefresh} />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }

}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  /**
   * updateScoreOrder change to ASCENDING or DESCENDING
   * @param  {[string]} payload ASCENDING or DESCENDING
   */
  updateScoreOrder: (payload) => dispatch({
    type: FILTER_ACTION.SCORE_SORT,
    payload,
  }),
  /**
   * updatePlatFormChoice choose which platform
   * @param  {[string]} payload platform name
   */
  updatePlatFormChoice: (payload) => dispatch({
    type: FILTER_ACTION.PLATFORM_CHOICE,
    payload
  }),
  /**
   * updateTitleSearch update title search
   * @param  {[string]} payload title to filter
   */
  updateTitleSearch: (payload) => dispatch({
    type: FILTER_ACTION.TITLE_SEARCH,
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(ArenaBar);
