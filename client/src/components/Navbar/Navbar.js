import React, { useCallback, useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import classes from "./Navbar.module.css";
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout =useCallback(() => {
        dispatch({ type: 'LOGOUT' });

        navigate('/');

        setUser(null);
    }, [dispatch, navigate]);

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [logout,location, user?.token]);


    return (
        <AppBar sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", backgroundColor: "rgb(9, 93, 248)"}} className={classes.appBar} position="static">
          <div to="/" className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">Student Dashboard</Typography>
          </div>
            
          <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }} className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>

                   <Button sx={{color: "rgb(9, 93, 248)", backgroundColor: "#e4efe7"}} component={NavLink} to="/courses" variant='contained' className={classes.courses}>Courses</Button>
                    <Button sx={{color: "rgb(9, 93, 248)", backgroundColor: "#e4efe7"}} variant="contained" className={classes.logout}  onClick={logout}>Logout</Button>
                </div>
            ) : (
              <div className={classes.signin}>
              <Button sx={{color: "rgb(9, 93, 248)", backgroundColor: "#e4efe7"}} component={NavLink} to="/auth" variant="contained" className={classes.signInButton} >Sign In</Button>
              </div>     
            )}
          </Toolbar>  
        </AppBar>
    );
}

export default Navbar
