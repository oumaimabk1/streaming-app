import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formReducer } from './reducers/formReducer';
import { loginReducer } from './reducers/loginReducer';
import { movieReducer } from './reducers/moviesReducer';
import passwordReducer from './reducers/resetpasswordReducer';

const rootReducer = combineReducers({
  registration: formReducer,
  moviesData: movieReducer,
  login:loginReducer,
  passwordReducer:passwordReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
