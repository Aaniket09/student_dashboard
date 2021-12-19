import express from "express";
import { getProfile, updateProfile } from "../controllers/profile.js";


const router = express.Router();

router.get("/:id", getProfile);

router.patch("/:id/update", updateProfile);

export default router;