import React, { useContext, useState } from "react";

import {
  Drawer,
  Box,
  makeStyles,
  createStyles,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";

import useWorkouts from "../../../hooks/useWorkouts";
import Timer from "./Timer";
import CircleProgress from "./CircleProgress";
import { WorkoutContext } from "../../../context/WorkoutProvider";
import RestTimer from "./RestTimer";

const useStyles = makeStyles((theme) =>
  createStyles({
    desktopDrawer: {
      width: "300px",
      top: "64px",
      height: "calc(100% - 64px)",
    },

    circleProgress: {},
  })
);

export default function Sidebar() {
  const classes = useStyles();
  const context = useContext(WorkoutContext);
  const workouts = useWorkouts();

  const [isStarted, setIsStarted] = useState(true);

  const handleFinishWorkout = () => {
    workouts.complete.mutate(context?.workout._id);
  };

  const getCompleteButton = () => {
    if (context?.progress !== 100) return "Keep going!";

    return "Finish";
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
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Timer isStarted={isStarted} variant="stopwatch" label="Duration" />
          <Box textAlign="center" mb={3} mt={1}>
            {isStarted ? (
              <Button
                color="secondary"
                variant="contained"
                onClick={() => setIsStarted(false)}
              >
                Stop
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={() => setIsStarted(true)}
              >
                Start
              </Button>
            )}
          </Box>
          <Divider variant="fullWidth" />
          <Box display="flex" flexDirection="column" flexGrow={1} paddingX={2}>
            <Box flexGrow={1} display="flex" alignItems="center">
              <CircleProgress value={context!.progress}>
                <Typography variant="h5" component="div" color="textSecondary">
                  {`${context?.progress}%`}
                </Typography>
              </CircleProgress>
            </Box>

            <RestTimer
              isStarted={context!.isResting}
              onComplete={context?.stopResting}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          disabled={context?.progress !== 100}
          onClick={handleFinishWorkout}
        >
          {getCompleteButton()}
        </Button>
      </Box>
    </Drawer>
  );
}
