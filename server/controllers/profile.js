import User from "../models/user.js";

export const getProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const userProfile = await User.findById(id);
        res.status(200).json(userProfile);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
};

export const updateProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { interests, gender, date } = req.body;
    try {
        const updatedProfile = await User.findByIdAndUpdate(_id, {dob: date, gender, interests}, {new: true});
        console.log(updatedProfile);
        res.status(200).json(updatedProfile);
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
};