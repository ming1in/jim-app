import React from "react";

import clsx from "clsx";
import {
  Paper,
  makeStyles,
  createStyles,
  Typography,
  List,
} from "@material-ui/core";

import useWorkouts from "../../../hooks/useWorkouts";
import UserWorkoutListItem from "./UserWorkoutListItem";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    root: {
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      padding: theme.spacing(4),
      flexDirection: "column",
    },
  })
);

export default function UserWorkoutsCard(props: any) {
  const classes = useStyles();
  const workouts = useWorkouts();
  const { data } = workouts.fetchAll();

  if (!data) return null;

  return (
    <Paper className={clsx(classes.root, props.className)}>
      <Typography variant="h4">Workouts</Typography>
      <List>
        {data.map((workout: any) => (
          <UserWorkoutListItem workout={workout} key={workout._id}/>
        ))}
      </List>
    </Paper>
  );
}
