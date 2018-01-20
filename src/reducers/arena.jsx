import { ARENA_ACTION } from '../actions';

const initialState = ['tony'];


/**
 * ARENA reducer function for todo app
 *  action present: INSERT and DELETE
 * @param  {array} [state=[]]  default state empty array
 * @param  {object} action              action object with keys type of action and payload
 * @return {array}                      return new state
 */
const arena = (state = initialState, action) => {
  switch (action.type) {
    // Update Arena
    case ARENA_ACTION.UPDATE_LIST:
      return  action.payload;
    default:
      return state;
  }
};

export default arena;
