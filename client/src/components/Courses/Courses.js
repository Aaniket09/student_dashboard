import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../actions/courses';

const Courses = () => {
    const courses = useSelector((state) => state.courses);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflow: "auto"}}>
        {courses.map((course) => (
         <Paper key={course._id} sx={{ width: "40%", padding: "1em", margin: "1em"}}>
             <Typography variant='h5' sx={{marginBottom: "1em"}}>{course.courseName}</Typography>
             <Typography variant='body' sx={{marginBottom: "1em"}}>Students Enrolled: {course.usersEnrolled.join(", ")}</Typography>
             <div>
             <Button sx={{ marginTop: "1em"}}>Enroll</Button>
             </div>
         </Paper>
        ))}
        
        </Box>
    )
};

export default Courses;
