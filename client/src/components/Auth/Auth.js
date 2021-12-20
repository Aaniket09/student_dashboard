import { Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../actions/auth";
import Input from "./Input";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import classes from "./Auth.module.css";
import { useNavigate } from "react-router";


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  
  const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleShowPassword = () =>
      setShowPassword((prevShowPassword) => !prevShowPassword);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (isSignup) {
        dispatch(signup(formData, navigate));
      } else {
        dispatch(signin(formData, navigate));
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData({ ...formData, [name]: value });
    };
  
    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      setShowPassword(false);
    };
  
  
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    className={classes.textField}
                    name="lastName"
                    value={formData.lastName}
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                className={classes.textField}
                name="email"
                value={formData.email}
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                className={classes.textField}
                name="password"
                value={formData.password}
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  className={classes.textField}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  label="Confirm Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <Button
              sx={{margin: "1em 0"}}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  };
  
  export default Auth;