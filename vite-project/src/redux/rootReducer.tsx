import { combineReducers } from "@reduxjs/toolkit";
import { user } from "./user/slice";
import { products } from "./products/slice";

const rootReducer = combineReducers({ user, products });

export default rootReducer;
