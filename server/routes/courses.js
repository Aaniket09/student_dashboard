import { enrollCourse, getCourses, getProfile, updateProfile } from "../controllers/courses.js";
import auth from "../middlewares/auth.js";

import express from "express";

const router = express.Router();

router.get('/', getCourses);
router.get('/profile', auth, getProfile);
router.post('/enroll', auth, enrollCourse);
router.patch('/:id', auth, updateProfile);

export default router;