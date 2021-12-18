import Course from "../models/courses.js";


export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
};

export const getProfile = async (req, res) => {};

export const enrollCourse = async (req, res) => {};

export const updateProfile = async (req, res) => {};


