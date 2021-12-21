import { FETCH_PROFILE, UPDATE_PROFILE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getProfile = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchProfile(id);

        dispatch({ type: FETCH_PROFILE, payload: data });
    } catch (error) {
        console.log(error.message);
    }   
};

export const editProfile = (details, id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(details, id);

        dispatch({ type: UPDATE_PROFILE, payload: {result: {...data}, token: user.token} });
    } catch (error) {
        console.log(error.message);
    }
};