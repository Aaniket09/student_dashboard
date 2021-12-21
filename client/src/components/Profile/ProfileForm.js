import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../../actions/profile';

const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "white",
    //   border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  
  const ProfileForm = ({ close, user }) => {
  const initialProfile = {
      name: user?.result?.name,
      gender: '',
      interests: '',
      date: '',
  };
    const [profileDetails, setProfileDetails] = useState(initialProfile);
    const dispatch = useDispatch();
    const id = user?.result?._id;


    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfileDetails({...profileDetails, [name]: value});
    }

    const handleSave = () => {
        dispatch(editProfile(profileDetails, id, user));
    
        close();
      };

    return (
        <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        My Profile :
      </Typography>
      <TextField
        id="outlined-multiline-static"
        name="name"
        label="Name"
        sx={{ width: 300, mb: 3, mt: 2 }}
        onChange={handleChange}
        value={profileDetails.name}
      />
      <DesktopDatePicker
        label="Date of Birth"
        minDate={new Date("1980-01-01")}
        name="dob"
        value={profileDetails.date}
        onChange={(newValue) => {
            setProfileDetails({...profileDetails, date: `${newValue.getDate()}-${newValue.getMonth()}-${newValue.getFullYear()}`})
        }}
        renderInput={(params) => <TextField sx={{mb: 2, width: 250}} {...params} />}
         />
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup row aria-label="gender" name="gender" onChange={handleChange} value={profileDetails.gender}>
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
      <TextField
        id="outlined-multiline-static"
        name="interests"
        label="Interests"
        multiline
        rows={4}
        sx={{ width: 600, mb: 3, mt: 2 }}
        onChange={handleChange}
        value={profileDetails.interests}
      />
      <br />
      <Button sx={{width: "12%"}} variant="contained" onClick={handleSave}>
        save
      </Button>
    </Box>
    )
}

export default ProfileForm;
