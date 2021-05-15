import React from "react";

import {
  Card,
  CardContent,
  Container,
  Box,
  makeStyles,
  createStyles,
  Link,
  Typography,
  Paper
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import LoginForm from "./LoginForm";
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
    loginPaper: {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      padding: '2%'
    },
  })
);

export default function LoginView() {
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
          <Typography align="center" color="textSecondary" variant="body2">Welcome back to Jim! Log in to find exercises for the muscle groups you are working on. Save workouts that you like or find exercises for different muscle groups!</Typography>
        </Paper>
        <Paper className={classes.loginPaper}>
          <LoginForm />
          <Box mt={1}>
            <Link
              component={RouterLink}
              to={ERoute.SIGNUP}
              variant="body2"
              color="secondary"
            >
              Don&apos;t have an account? Click here to sign up
              </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
