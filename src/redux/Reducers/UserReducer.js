import {
    SET_USER
} from "../actions/actionTypes";
const initialState = {
    user: null,
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};
export default UserReducer;