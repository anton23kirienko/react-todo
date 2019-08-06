import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import rootReducer from './reducers';

import { loadState, setState } from './utils/localStorage';

const middleware = applyMiddleware(thunk);
const initialState = loadState();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleware)
);

store.subscribe(throttle(() => {
  setState({
    todos: store.getState().todos
  });
}, 1000));

export default store;
