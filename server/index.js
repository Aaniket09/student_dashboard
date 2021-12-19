import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import courseRoutes from "./routes/courses.js";
import userRoutes from "./routes/users.js";
import profileRoutes from "./routes/profile.js";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/courses', courseRoutes);
app.use('/users', userRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Student Dashboard API');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));