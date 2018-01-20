import { FILTER_ACTION } from '../actions';

const initialState = {
  sort: 'ASCENDING', // value ASCENDING or DESCENDING
  platform: 'ALL',
  title: '',
}


/**
 * ARENA reducer function for todo app
 *  action present: INSERT and DELETE
 * @param  {array} [state=initialState]  default state empty array
 * @param  {object} action              action object with keys type of action and payload
 * @return {array}                      return new state
 */
const filter = (state = initialState, action) => {
  switch (action.type) {
    // Update Arena
    case FILTER_ACTION.SCORE_SORT:
      return  { ...state, sort: action.payload };
    case FILTER_ACTION.PLATFORM_CHOICE:
      return { ...state, platform: action.payload };
    case FILTER_ACTION.TITLE_SEARCH:
      return { ...state, title: action.payload};
    default:
      return state;
  }
};

export default filter;
