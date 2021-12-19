import { FETCH_PROFILE } from "../constants/actionTypes";


const profileReducer = (profile = [], action) => {
    switch(action.type) {
        case FETCH_PROFILE:
            return action.payload;

        default:
            return profile;
    }
};

export default profileReducer;