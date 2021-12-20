import { ENROLL_COURSE, FETCH_COURSES } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCourses();

        dispatch({ type: FETCH_COURSES, payload: data });
    } catch (error) {
        console.log(error.message);
    }   
};

export const enrollCourse = (details, navigate) => async (dispatch) => {
    try {
        const { data } = await api.enrollCourse(details);
        dispatch({ type: ENROLL_COURSE, payload: data });
        navigate('/');
    } catch (error) {
        console.log(error.message);
        console.log("Heeloo")
    }
};