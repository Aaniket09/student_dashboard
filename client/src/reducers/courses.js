import { ENROLL_COURSE, FETCH_COURSES } from "../constants/actionTypes";

const coursesReducer = (courses = [], action) => {
    switch(action.type) {
        case FETCH_COURSES:
            return action.payload;
        
        case ENROLL_COURSE:
            return courses.map((course) => course._id === action.payload._id ? action.payload : course);

        default:
            return courses;
    }
};

export default coursesReducer;