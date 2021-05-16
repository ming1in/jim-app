import React from "react";

import {
  makeStyles,
  createStyles,
  Paper,
  Button,
  Avatar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import BuildIcon from "@material-ui/icons/Build";

import { ERoute } from "../../../enums/route";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      flexGrow: 1,
      maxWidth: "50%",
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    avatarIcon: {
      width: "70%",
      height: "70%",
    },
    avatar: {
      height: 80,
      width: 80,
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      textAlign: "center",
    },
    collapseContainer: {
      width: "100%",
    },
  })
);

export default function BuildWorkoutCard() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <BuildIcon className={classes.avatarIcon} />
      </Avatar>
      <Button variant="outlined" onClick={() => history.push(ERoute.BUILD)}>
        Build your own custom Workout
      </Button>
    </Paper>
  );
}
