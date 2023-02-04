import {combineReducers} from "redux";
import UsersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
    userState : UsersReducer
})

export default rootReducer;