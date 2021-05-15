import React, { Dispatch, SetStateAction } from "react";

import {
  Drawer,
  Box,
  makeStyles,
  createStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
  Button,
  CircularProgress
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import useWorkouts from "../../../hooks/useWorkouts";

const useStyles = makeStyles((theme) =>
  createStyles({
    desktopDrawer: {
      width: "300px",
      top: "64px",
      height: "calc(100% - 64px)",
    },
  })
);

interface ISidebarProps {
  selectedExercises: any[];
  setSelectedExercises: Dispatch<SetStateAction<any[]>>;
}

export default function Sidebar(props: ISidebarProps) {
  const classes = useStyles();
  const workouts = useWorkouts();

  const removeSelectedExercise = (exercise: any) => {
    const newExcercises = props.selectedExercises.filter(
      (x) => x._id !== exercise._id
    );
    props.setSelectedExercises(newExcercises);
  };

  const handleStartWorkout = () => {
    workouts.add.mutate(props.selectedExercises)
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
        p={2}
        mb={5}
      >
        <Box flexGrow={1}>
          <Typography variant="h6">Selected Exercises</Typography>
          <Divider variant="fullWidth" />
          <List>
            {props.selectedExercises.map((exercise) => (
              <ListItem>
                <ListItemText primary={exercise.name} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => removeSelectedExercise(exercise)}>
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
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
