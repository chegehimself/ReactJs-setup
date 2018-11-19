import { combineReducers } from 'redux';

import home from "./reducers/home";
import signup from "./reducers/signup";

export default combineReducers({
  home,
  signup
});