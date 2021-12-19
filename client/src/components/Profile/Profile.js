import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../actions/profile';

import classes from "./Profile.module.css";

const Profile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    
    const id = user?.result?._id;

    useEffect(() => {
        dispatch(getProfile(id));
    }, [id, dispatch]);

    if (!user?.result?.name) {
        return (
            <Box mt={5} sx={{ display: "flex", justifyContent: "center"}}>
            <Paper className={classes.paper}>
                <Typography variant='h6' align="center">
                    Please Sign In to view your dashboard
                </Typography>
            </Paper>
            </Box>
        );
    };


    return (
        <Box mt={5} sx={{ display: "flex", justifyContent: "center"}}>
            <Paper className={classes.paper}>
                <Typography variant='h6' align="center">
                    Your Profile
                </Typography>
                <div>Name: {profile.name}</div>
                <div>Email: {profile.email}</div>
                <div>DOB: {profile.dob}</div>
                <div>Gender: {profile.gender}</div>
                <div>Interests: {profile.interests}</div>
                <div>Courses: {profile.courses}</div>
            </Paper>
        </Box>
    )
};

export default Profile;
