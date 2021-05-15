import React, { useContext, useState, useEffect } from "react";

import {
  Typography,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Button,
  Collapse,
  Stepper,
  Box,
  Step,
  StepLabel,
  LinearProgress,
} from "@material-ui/core";
import { IExercise } from "../../../interfaces/workout";
import { WorkoutContext } from "../../../context/WorkoutProvider";

const useStyles = makeStyles((theme) =>
  createStyles({
    exerciseListItem: {
      backgroundColor: theme.palette.secondary.main,
      marginTop: theme.spacing(2),
      borderRadius: theme.spacing(1),
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    collapseContainer: {
      paddingLeft: theme.spacing(5),
    },
    stepper: {
      backgroundColor: theme.palette.background.default,
    },
    stepperItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    progress: {
      marginTop: "-4px",
      marginInline: theme.spacing(0.7),
    },
  })
);

interface IWorkoutListItemProps {
  exercise: IExercise;
  numExercise: number;
}

export default function WorkoutListItem(props: IWorkoutListItemProps) {
  const classes = useStyles();
  const context = useContext(WorkoutContext);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [isRested, setIsRested] = useState<number[]>([]);

  const progress = Math.round(
    (completedSets.length / props.exercise.set) * 100
  );

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  const handleCompleteSet = (setNumber: number) => {
    setCompletedSets([...completedSets, setNumber]);
    context!.addCompletedSet();
  };

  const handleStartResting = (setNumber: number) => {
    setIsRested([...isRested, setNumber]);
    context!.startResting()
  };

  useEffect(() => {
    if (progress === 100) setIsCollapsed(false);
  }, [progress]);

  return (
    <>
      <ListItem key={props.exercise._id} className={classes.exerciseListItem}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{props.numExercise + 1}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.exercise.name}
          secondary={`${props.exercise.set} sets - ${props.exercise.rep} reps`}
        />
        <ListItemSecondaryAction>
          <Button onClick={toggleCollapsed}>Start Exercise</Button>
        </ListItemSecondaryAction>
      </ListItem>
      <LinearProgress
        className={classes.progress}
        variant="determinate"
        value={progress}
      />
      <Collapse
        in={isCollapsed}
        unmountOnExit
        className={classes.collapseContainer}
      >
        <Stepper orientation="vertical" className={classes.stepper}>
          {[...Array(props.exercise.set)].map((_, setNumber) => (
            <Step key={setNumber} completed={completedSets.includes(setNumber)}>
              <StepLabel>
                <Box className={classes.stepperItem}>
                  <Typography>
                    {`${props.exercise.name} - Set ${setNumber + 1}`}
                  </Typography>
                  {!completedSets.includes(setNumber) ? (
                    <Button
                      variant="outlined"
                      onClick={() => handleCompleteSet(setNumber)}
                    >
                      Complete
                    </Button>
                  ) : (
                    !isRested.includes(setNumber) && (
                      <Button
                        variant="outlined"
                        onClick={() => handleStartResting(setNumber)}
                      >
                        Rest
                      </Button>
                    )
                  )}
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Collapse>
    </>
  );
}
