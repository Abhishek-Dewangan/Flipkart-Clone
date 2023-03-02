import {legacy_createStore as createStore, combineReducers} from 'redux';
import {ProductReducer} from './Reducers/ProductReducer';
import {UserReducer} from './Reducers/UserReducer';

const rootReducer = combineReducers({ProductReducer, UserReducer});

export const store = createStore(rootReducer);
