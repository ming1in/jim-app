import React from "react";

import { useParams } from "react-router";
import { Typography, makeStyles, createStyles } from "@material-ui/core";

import useWorkouts from "../../../hooks/useWorkouts";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      overflow: "hidden",
      width: "100%",
    },
    wrapper: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
      paddingRight: "300px",
    },
    content: {
      flex: "1 1 auto",
      height: "100%",
      overflow: "auto",
      padding: theme.spacing(5),
    },
  })
);

export default function WorkoutView() {
    const classes = useStyles();
  const { workoutId } = useParams() as any;
  const workouts = useWorkouts();

  const {data: workout} = workouts.fetchWorkout(workoutId);

  console.log(workout);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Typography>{workoutId}</Typography>
        </div>
      </div>
      <Sidebar/>
    </div>
  );}
