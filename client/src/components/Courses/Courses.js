import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { enrollCourse, getCourses } from '../../actions/courses';
import { getProfile } from '../../actions/profile';


const Courses = () => {
    const profile = useSelector((state) => state.profile);
    const courses = useSelector((state) => state.courses);
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = user?.result?._id;

     useEffect(() => {
        dispatch(getCourses());
        dispatch(getProfile(id));
     }, [id,dispatch]);

    const handleEnrolClick = (course) => {
        const courseDetails = {courseId: course._id, 
            courseName: course.courseName, 
            userId: user?.result?._id, 
            userName: user?.result?.name}
            dispatch(enrollCourse(courseDetails,  navigate));
    }

    return (
        <Box sx={{height: "73vh",paddingLeft: "35%", overflow: "auto"}}>
        {courses && courses.map((course) => (
         <Paper key={course._id} sx={{ width: "50%", marginBottom: "1rem", padding: "1em"}}>
             <Typography variant='h5' sx={{marginBottom: "1em"}}>{course.courseName}</Typography>
             <Typography variant='body' sx={{marginBottom: "1em"}}>Students Enrolled: {course.usersEnrolled.join(", ")}</Typography>
             <div>
             {profile.courses.find((e) => e === course.courseName) ?  <Button sx={{ marginTop: "1em", backgroundColor: "rgb(9, 93, 248)", color: "white"}} disabled>Enroll</Button> : 
             <Button sx={{ marginTop: "1em", backgroundColor: "rgb(9, 93, 248)", color: "white"}} onClick={() => handleEnrolClick(course)}>Enroll</Button>}
             </div>
         </Paper>
        ))}
        
        </Box>
    )
};

export default Courses;
