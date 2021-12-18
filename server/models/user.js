import  mongoose from "mongoose";


const userShema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    id: { type: String },
    dob: { type: Date },
    gender: { type: Number },
    interests: { type: String },
});

const User = mongoose.model("User", userShema);

export default User;