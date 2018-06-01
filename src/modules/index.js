import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import popUps from './popUps';

export { showVideo, hideVideo } from './popUps';

export default combineReducers({
  router: routerReducer,
  counter,
  popUps
});
