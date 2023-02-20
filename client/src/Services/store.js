import {legacy_createStore as createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({});

export const store = createStore(rootReducer);
