import React from "react";

import { useParams } from "react-router";
import { makeStyles, createStyles } from "@material-ui/core";

import useWorkouts from "../../../hooks/useWorkouts";
import Sidebar from "./Sidebar";
import WorkoutList from "./WorkoutList";
import WorkoutProvider from "../../../context/WorkoutProvider";

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
  const workouts = useWorkouts();
  const { workoutId } = useParams() as any;

  const { data: workout } = workouts.fetchWorkout(workoutId);

  if (!workout) return null;

  return (
    <WorkoutProvider>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <WorkoutList workout={workout[0]} />
          </div>
        </div>
        <Sidebar />
      </div>
    </WorkoutProvider>
  );
}
