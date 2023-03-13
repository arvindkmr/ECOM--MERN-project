import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productReducer,
  productDetailsReducer,

} from './reducers/productReducer';

import { cartReducer } from "./reducers/cartReducer";
import {userReducer, profileReducer} from "./reducers/userReducer.js"
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile:profileReducer,
  cart: cartReducer,
});

let initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
