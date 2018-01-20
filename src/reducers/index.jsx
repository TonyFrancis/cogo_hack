import { combineReducers } from 'redux';
import arena from './arena';
import filter from './filter';

const reducer = combineReducers({
  arena,
  filter,
});

export default reducer;
