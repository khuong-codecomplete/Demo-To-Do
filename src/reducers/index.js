import todoReducer from "./todo";
import userReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
});

export default rootReducer;