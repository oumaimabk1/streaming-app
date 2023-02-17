import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formReducer } from './reducers/formReducer';
import { movieReducer } from './reducers/moviesReducer';

const rootReducer = combineReducers({
  registration: formReducer,
  moviesData: movieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
