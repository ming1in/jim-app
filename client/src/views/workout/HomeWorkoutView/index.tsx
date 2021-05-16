import React from "react";

import {
  Container,
  Box,
  makeStyles,
  createStyles,
  Typography,
} from "@material-ui/core";

import GenWorkoutCard from "./GenWorkoutCard";
import BuildWorkoutCard from "./BuildWorkoutCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "90%",
    },
    paper: {
      padding: theme.spacing(4),
      flexGrow: 1,
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    avatarIcon: {
      height: "85%",
      width: "85%",
    },
    avatar: {
      height: 80,
      width: 80,
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function WorkoutView() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h2">Start your Workout</Typography>
      <Box display="flex" width="100%">
        <GenWorkoutCard />
        <BuildWorkoutCard />
      </Box>
    </Container>
  );
}
