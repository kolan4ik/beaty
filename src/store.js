import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers'
import randomId from './middlewares/randomId'
import api from './middlewares/api'


const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    randomId,
    api
  )
);

window.store = store;

export default store;