import React, { useRef, useState } from "react";

import {
  makeStyles,
  createStyles,
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  Button,
  ListItemAvatar,
  Avatar,
  Menu,
  MenuItem,
  ButtonBase
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
    popover: {
      width: 200,
    },
  })
);

export default function UserWorkoutListItem(props: any) {
  const classes = useStyles();
  const workouts = useWorkouts();
  const history = useHistory();
  const ref = useRef(null);
  const { data } = workouts.fetchAll();

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTimeStamp = (workout: any) => {
    if (workout.completedAt)
      return `Completed ${moment(workout.completedAt).format("M/D/YYYY")}`;

    return `Created ${moment(workout.createdAt).format("M/D/YYYY")}`;
  };

  const handleStartWorkout = () => {
    history.push(ERoute.WORKOUT + "/" + props.workout._id);
  };
  
  const handleDelete = () => {
    handleClose();
    workouts.remove.mutate(props.workout._id);
  }

  if (!data) return null;

  return (
    <>
      <ListItem ref={ref} onClick={handleOpen} component={ButtonBase}>
        <ListItemAvatar>
          <Avatar className={props.workout.completedAt && classes.avatar}>
            {props.workout.completedAt ? <DoneIcon /> : <CloseIcon />}
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={props.workout.title || "Random Workout"}
          secondary={getTimeStamp(props.workout)}
        />
        <ListItemSecondaryAction>
          <Button
            onClick={handleStartWorkout}
            endIcon={<ChevronRightIcon />}
          >
            Start
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu
        onClose={handleDelete}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem>Delete</MenuItem>
      </Menu>
      <Divider />
    </>
  );
}
