import React, { useState, Dispatch, SetStateAction } from "react";

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
  TextField,
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

  const [title, setTitle] = useState("Random Workout");

  const handleStartWorkout = () => {
    workouts.add.mutate({exercises: props.selectedExercises, title});
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
        paddingX={1.5}
        paddingY={1}
        mb={5}
      >
        <Box flexGrow={1}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
