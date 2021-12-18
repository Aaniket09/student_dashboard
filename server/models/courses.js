import mongoose from "mongoose";


const coursesSchema = mongoose.Schema({
    courseName: { type: String},
    id: { type: String },
    usersEnrolled: [String],
});

const Course = mongoose.model("Course", coursesSchema);


export default Course;