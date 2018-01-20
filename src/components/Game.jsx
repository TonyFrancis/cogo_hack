import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Star from 'material-ui-icons/Star';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Typography from 'material-ui/Typography';


/**
 * Game data listing item
 * @param {[string]} title          title of game
 * @param {[string]} platform        PS3 or PC ...
 * @param {[number]} score           rating number
 * @param {[string]} genre           which category belong to
 * @param {[string]} editors_choice  Y or N
 */
const Game = ({title, platform, score, genre, editors_choice}) => (
  <Grid item xs={12} sm={6} lg={3}>
    <Card>
      <CardContent>
        <Typography  type="headline" component="h2">
            {title}
        </Typography>
        <Grid container>
          <Grid item xs={6} sm={6} lg={6}>
            <Typography component="p">
              {platform}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} lg={6}>
            <div style={{ float: 'right'}}>
              <Typography component="p">
                {score}
              </Typography>
            </div>
            <Star style={{ fill: '#FFDF00', float: 'right'}}/>
          </Grid>
          <Grid item xs={6} sm={6} lg={6}>
          <Typography component="h3">{genre}</Typography>
          </Grid>
          <Grid item xs={6} sm={6} lg={6} style={{ float: 'right'}}>
            {editors_choice === 'Y' ?
              <ThumbUp style={{ float: 'right', fill: '#0000FF'}}/>:
              null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
);
export default Game;
