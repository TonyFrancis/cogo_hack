import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Dashborad from './components/Dashborad';

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <Dashborad />
  </Provider>
);

export default App;
