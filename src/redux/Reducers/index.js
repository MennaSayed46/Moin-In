import UserReducer from './UserReducer';



import {combineReducers} from "redux";

const rootReducer = combineReducers({
    userState: UserReducer,
});

export default rootReducer;