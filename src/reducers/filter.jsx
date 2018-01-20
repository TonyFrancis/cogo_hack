import { FILTER_ACTION } from '../actions';

const initialState = {
  sort: 'ASCENDING', // value ASCENDING or DESCENDING

}


/**
 * ARENA reducer function for todo app
 *  action present: INSERT and DELETE
 * @param  {array} [state=[]]  default state empty array
 * @param  {object} action              action object with keys type of action and payload
 * @return {array}                      return new state
 */
const filter = (state = initialState, action) => {
  switch (action.type) {
    // Update Arena
    case FILTER_ACTION.SCORE_SORT:
      return  { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default filter;
