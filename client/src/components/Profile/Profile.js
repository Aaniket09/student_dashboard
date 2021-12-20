import { Box, IconButton, Modal, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../actions/profile';
import EditIcon from "@mui/icons-material/Edit";

import classes from "./Profile.module.css";
import ProfileForm from './ProfileForm';

const Profile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
                <IconButton
                    sx={{
                    color: "#0080ff",
                    position: "absolute",
                    marginLeft: 58,
                    marginTop: -0.5
                   // transform: "translate(210%, 10%)",
                    }}
                    onClick={handleOpen}
                >
                    <EditIcon />
                </IconButton>
                <Typography variant='h5' align="center">
                    Your Profile
                </Typography>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box>
                    <ProfileForm user={user} close={handleClose} />
                    </Box>
                </Modal>
                <h4>Name: {profile.name}</h4>
                <h4>Email: {profile.email}</h4>
                <h4>DOB: {profile.dob}</h4>
                <h4>Gender: {profile.gender}</h4>
                <h4>Interests: {profile.interests}</h4>
                <h4>Courses: {profile.courses && profile.courses.join(", ")}</h4>
            </Paper>
        </Box>
    )
};

export default Profile;
