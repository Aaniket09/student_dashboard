import { enrollCourse, getCourses } from "../controllers/courses.js";
import auth from "../middlewares/auth.js";

import express from "express";

const router = express.Router();

router.get('/', auth, getCourses);
router.post('/enroll', auth, enrollCourse);

export default router;