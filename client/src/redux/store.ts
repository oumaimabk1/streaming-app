import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formReducer } from './reducers/formReducer';

const rootReducer = combineReducers({
  registration: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
