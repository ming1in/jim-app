import React, { useContext } from "react";

import { List, Typography } from "@material-ui/core";

import WorkoutListItem from "./WorkoutListItem";
import { WorkoutContext } from "../../../context/WorkoutProvider";

export default function WorkoutList(props: any) {

  const context = useContext(WorkoutContext)

  return (
    <>
      <Typography variant="h3">Workout</Typography>
      <List>
        {Object.values(context?.workout.exercises[0]).map((exercise: any, idx) => (
          <WorkoutListItem exercise={exercise} numExercise={idx}/>
        ))}
      </List>
    </>
  );
}
