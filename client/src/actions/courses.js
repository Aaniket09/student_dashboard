import { FETCH_COURSES } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourses();

        dispatch({ type: FETCH_COURSES, payload: data });
    } catch (error) {
        console.log(error.message);
    }   
}