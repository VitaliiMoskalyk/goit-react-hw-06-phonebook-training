import { combineReducers } from "redux";
import { ADD_TODO, DEL_TODO, TOGGLE_TODO, FILTER_TODO } from "./todos-types";

const items = (state = [], actions) => { return state };

const filter = (state = '', actions) => { return state };

export default combineReducers({items,filter})