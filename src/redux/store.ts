import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formReducer } from './reducers/formReducer';
import { loginReducer } from './reducers/loginReducer';
import { movieReducer, OnemovieReducer } from './reducers/moviesReducer';
import passwordReducer from './reducers/resetpasswordReducer';
import { genreReducer, genreserieReducer } from './reducers/searchReducer';
import { OneserieReducer, serieReducer } from './reducers/seriesReducer';

const rootReducer = combineReducers({
  registration: formReducer,
  login:loginReducer,
  passwordReducer:passwordReducer,
  genres:genreReducer,
  genresseries:genreserieReducer,
  moviesData: movieReducer,
  Onemovie:OnemovieReducer,
  seriesData: serieReducer,
  Oneserie:OneserieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
