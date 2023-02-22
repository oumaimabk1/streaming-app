import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formReducer } from './reducers/formReducer';
import { loginReducer } from './reducers/loginReducer';
import { movieReducer, OnemovieReducer } from './reducers/moviesReducer';
import passwordReducer from './reducers/resetpasswordReducer';
import { genreReducer } from './reducers/searchReducer';

const rootReducer = combineReducers({
  registration: formReducer,
  moviesData: movieReducer,
  login:loginReducer,
  passwordReducer:passwordReducer,
  genres:genreReducer,
  Onemovie:OnemovieReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
