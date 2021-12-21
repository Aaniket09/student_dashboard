import { FETCH_PROFILE, UPDATE_PROFILE } from "../constants/actionTypes";


const profileReducer = (profile = [], action) => {
    switch(action.type) {
        case FETCH_PROFILE:
            return action.payload;
        case UPDATE_PROFILE:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));

            return action.payload.result;

        default:
            return profile;
    }
};

export default profileReducer;