import Course from "../models/courses.js";
import User from "../models/user.js";


export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
};



export const enrollCourse = async (req, res) => {
    const { courseId, courseName, userId, userName } = req.body;
    try {
        const courseToEnroll = await Course.findById({_id: courseId});
        courseToEnroll.usersEnrolled.push(userName);
        await courseToEnroll.save();

        const userCourses = await User.findById({_id: userId});
        userCourses.courses.push(courseName);
        await userCourses.save();
        res.json(courseToEnroll);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};




