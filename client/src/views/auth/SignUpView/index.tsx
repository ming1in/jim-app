import React from "react";

import {
  Card,
  CardContent,
  Container,
  Box,
  makeStyles,
  createStyles,
  Link,
  Paper,
  Typography
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import { ERoute } from "../../../enums/route";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
    },
    logoPaper: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
      maxWidth: '50%',
      padding: '2%'
    },
    signupPaper: {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      padding: '2%'
    },
  })
);

function SignUpView() {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" m={5} >
        <Paper className={classes.logoPaper}>
          <Typography align="center" color="textPrimary" variant="h2">Jim</Typography>
          <Typography align="center" color="textPrimary" variant="h4"> Your Personal Gym Trainer</Typography>
          <Typography align="center">
            <img width="30%"
              src="/static/small_logo.png"
              alt="Logo"
            />
          </Typography>
          <Typography align="center" color="textSecondary" variant="body2">
            Welcome to Jim! Sign up to find exercises for the muscle groups you are working on. Save workouts that you like or find exercises for different muscle groups!
          </Typography>
          <Typography align="center" color="textSecondary" variant="body2"><br></br>
            Step 1. Sign up with your email and create your password <br></br>
            Step 2. Enter your information so we get to know you<br></br>
            Step 3. Get started with your workouts!
          </Typography>
        </Paper>
        <Paper className={classes.signupPaper}>
        <SignUpForm />
            <Box mt={1}>
              <Link
                component={RouterLink}
                to={ERoute.LOGIN}
                variant="body2"
                color="secondary"
              >
                Have an account? Click here to login
              </Link>
            </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default SignUpView;
