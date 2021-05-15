import React, { useState } from "react";

import { makeStyles, createStyles } from "@material-ui/core";

import Sidebar from "./Sidebar";
import Browse from "./Browse";

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

export default function BuildWorkoutView(props: any) {
  const classes = useStyles();

  const [selectedExercises, setSelectedExercises] = useState<any[]>([]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Browse
            selectedExercises={selectedExercises}
            setSelectedExercises={setSelectedExercises}
          />
        </div>
      </div>
      <Sidebar
        selectedExercises={selectedExercises}
        setSelectedExercises={setSelectedExercises}
      />
    </div>
  );
}
