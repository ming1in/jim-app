import React from "react";

import { useParams } from "react-router";
import { Typography } from "@material-ui/core";

import useWorkouts from "../../../hooks/useWorkouts";

export default function WorkoutView() {
  const { workoutId } = useParams() as any;
  const workouts = useWorkouts();

  const {data: workout} = workouts.fetchWorkout(workoutId);

  console.log(workout);

  return <Typography>{workoutId}</Typography>;
}
