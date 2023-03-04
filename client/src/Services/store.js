import {legacy_createStore as createStore, combineReducers} from 'redux';
import {ProductReducer} from './Reducers/ProductReducer';
import {UserReducer} from './Reducers/UserReducer';
import {WishlistReducer} from './Reducers/WishlistReducer';

const rootReducer = combineReducers({
  ProductReducer,
  UserReducer,
  WishlistReducer,
});

export const store = createStore(rootReducer);
