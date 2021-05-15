import React, { Dispatch, SetStateAction } from "react";

import {
  Drawer,
  Box,
  makeStyles,
  createStyles,
  List,
  Typography,
  Divider,
  Button,
  CircularProgress,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import useWorkouts from "../../../../hooks/useWorkouts";
import ExerciseListItem from "./ExerciseListItem";
import { IExercise } from "../../../../interfaces/workout";

const useStyles = makeStyles((theme) =>
  createStyles({
    desktopDrawer: {
      width: "350px",
      top: "64px",
      height: "calc(100% - 64px)",
    },
  })
);

interface ISidebarProps {
  selectedExercises: { [id: string]: IExercise };
  setSelectedExercises: Dispatch<SetStateAction<{ [id: string]: IExercise }>>;
}

export default function Sidebar(props: ISidebarProps) {
  const classes = useStyles();
  const workouts = useWorkouts();

  const handleStartWorkout = () => {
    workouts.add.mutate(props.selectedExercises);
  };

  return (
    <Drawer
      anchor="right"
      open={true}
      classes={{ paper: classes.desktopDrawer }}
      variant="persistent"
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        bgcolor="white"
        paddingX={1}
        paddingY={2}
        mb={5}
      >
        <Box flexGrow={1}>
          <Typography variant="h6">Selected Exercises</Typography>
          <Divider variant="fullWidth" />
          <List>
            {Object.values(props.selectedExercises).map((exercise) => (
              <ExerciseListItem
                exercise={exercise}
                selectedExercises={props.selectedExercises}
                setSelectedExercises={props.setSelectedExercises}
              />
            ))}
          </List>
        </Box>
        <Button
          onClick={handleStartWorkout}
          variant="contained"
          color="primary"
        >
          {workouts.add.isLoading ? <CircularProgress /> : "Start Workout"}
        </Button>
      </Box>
    </Drawer>
  );
}
