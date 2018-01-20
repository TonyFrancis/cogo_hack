import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Game from './Game';
import ArenaBar from './ArenaBar';
import { ARENA_ACTION } from '../actions/index';
import URL from '../urls';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

/**
 *  Dashborad
 *  connect to redux
 * @extends Component
 */
class Dashborad extends Component {
  constructor(props) {
    super(props);
    this.filterGames = this.filterGames.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {

    };
  }
  componentWillMount() {
    this.getData();
  }
  getData(){
    axios.get(URL.gamesarena)
      .then(res => {
         return res.data;
      })
      .then(res => {
        return  res.slice(1, res.length);
      })
      .then(res => {
        console.log(res);
        this.props.updateList(res);
      })
  }
  /**
   * filterGames filters all data based on the filters
   * @return {[Array]} returns filtered Array
   */
  filterGames() {
    const { arena, filter } = this.props;
    let filteredData = this.props.arena.sort((a,b) => {
      if (filter.sort === 'ASCENDING') {
        return a.score - b.score;
      } else {
        return b.score - a.score;
      }
    })
    filteredData = filteredData.filter( elem => {
      if (filter.platform === 'ALL') {
        return true;
      } else {
        return filter.platform === elem.platform;
      }
    })
    filteredData = filteredData.filter(elem => {
      return elem.title.indexOf(filter.title) !== -1
    })
    return filteredData
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item sm={12} lg={12}>
          <ArenaBar onRefresh={() => this.getData()}/>
        </Grid>
        {this.filterGames().map((elem, i) => {
          return (
            <Game {...elem} key={i} />
          )
        })}
      </Grid>
    );
  }

}

const mapStateToProps = (state) => ({
  arena: state.arena,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  updateList: (payload) => dispatch({
    type: ARENA_ACTION.UPDATE_LIST,
    payload,
  })
});
Dashborad = withStyles(styles)(Dashborad);
export default connect(mapStateToProps, mapDispatchToProps)(Dashborad);
