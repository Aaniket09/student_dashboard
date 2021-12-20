import  mongoose from "mongoose";


const userShema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    id: { type: String },
    dob: { type: String },
    gender: { type: String },
    interests: { type: String },
    courses: { type: Array },
});

const User = mongoose.model("User", userShema);

export default User;