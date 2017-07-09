import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import feedReducer from './feedReducer';
import loginReducer from './loginReducer';
import navReducer from './navReducer';
import profileReducer from './profileReducer';
import registerReducer from './registerReducer';

const AppReducer = combineReducers({
  feed: feedReducer,
  login: loginReducer,
  nav: navReducer,
  profile: profileReducer,
  register: registerReducer
});

export default AppReducer;