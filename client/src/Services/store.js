import {legacy_createStore as createStore, combineReducers} from 'redux';
import {ProductReducer} from './Reducers/ProductReducer';

const rootReducer = combineReducers({ProductReducer});

export const store = createStore(rootReducer);
