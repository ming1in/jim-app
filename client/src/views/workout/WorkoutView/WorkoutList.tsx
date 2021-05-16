import React, { useContext } from "react";

import { List, Typography } from "@material-ui/core";

import WorkoutListItem from "./WorkoutListItem";
import { WorkoutContext } from "../../../context/WorkoutProvider";

export default function WorkoutList(props: any) {
  const context = useContext(WorkoutContext);

  return (
    <>
      <Typography variant="h3">{context!.workout.title}</Typography>
      <List>
        {context?.workout.exercises.map((exercise: any, idx: number) => (
          <WorkoutListItem exercise={exercise} numExercise={idx} />
        ))}
      </List>
    </>
  );
}
