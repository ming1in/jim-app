import React from "react";

import clsx from "clsx";
import {
  Paper,
  makeStyles,
  createStyles,
  Typography,
  ListItem,
  ListItemText,
  List,
  Divider,
  ListItemSecondaryAction,
  Button,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import moment from "moment";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router";

import useWorkouts from "../../../hooks/useWorkouts";
import { ERoute } from "../../../enums/route";

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
  const history = useHistory();
  const { data } = workouts.fetchAll();

  console.log(data);

  const getTimeStamp = (workout: any) => {
    if (workout.completedAt)
      return `Completed ${moment(workout.completedAt).format("M/D/YYYY")}`;

    return `Created ${moment(workout.createdAt).format("M/D/YYYY")}`;
  };

  const handleStartWorkout = (id: string) => {
    history.push(ERoute.WORKOUT + "/" + id);
  };

  if (!data) return null;

  return (
    <Paper className={clsx(classes.root, props.className)}>
      <Typography variant="h4">Workouts</Typography>
      <List>
        {data.map((workout: any, idx: number) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={workout.completedAt && classes.avatar}>
                  {workout.completedAt ? <DoneIcon /> : <CloseIcon />}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={workout.title || "Random Workout"}
                secondary={getTimeStamp(workout)}
              />
              <ListItemSecondaryAction>
                <Button
                  onClick={() => handleStartWorkout(workout._id)}
                  endIcon={<ChevronRightIcon />}
                >
                  Start
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
