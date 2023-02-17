import {legacy_createStore as createStore, combineReducer} from 'react-redux';

const rootReducer = combineReducer({});

export const store = createStore(rootReducer);
