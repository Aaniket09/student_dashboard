import { FETCH_PROFILE, UPDATE_PROFILE } from "../constants/actionTypes";


const profileReducer = (profile = [], action) => {
    switch(action.type) {
        case FETCH_PROFILE:
            return action.payload;
        case UPDATE_PROFILE:
            return action.payload;

        default:
            return profile;
    }
};

export default profileReducer;