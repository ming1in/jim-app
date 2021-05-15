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
  CircularProgress,
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

interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  const classes = useStyles();
  const workouts = useWorkouts();

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
        </Box>
        <Button variant="contained" color="primary">
          {workouts.add.isLoading ? <CircularProgress /> : "Start Workout"}
        </Button>
      </Box>
    </Drawer>
  );
}
