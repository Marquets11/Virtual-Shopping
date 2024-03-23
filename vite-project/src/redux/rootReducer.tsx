import { combineReducers } from "@reduxjs/toolkit";
import { user } from "./user/slice";
import { products } from "./products/slice";
import { cart } from "./cart/slice";

const rootReducer = combineReducers({ user, products, cart });

export default rootReducer;
