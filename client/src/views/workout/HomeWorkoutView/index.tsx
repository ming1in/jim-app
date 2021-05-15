import React from "react";

import {
  Container,
  Box,
  makeStyles,
  createStyles,
  Paper,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { ERoute } from "../../../enums/route";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "90%",
    },
    paper: {
      padding: theme.spacing(4),
      flexGrow: 1,
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

export default function WorkoutView() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h2">Start your Workout</Typography>
      <Box display="flex" width="100%">
        <Paper className={classes.paper}>
          <Typography>Generate a random Workout</Typography>
        </Paper>
        <Paper
          className={classes.paper}
          onClick={() => history.push(ERoute.BUILD)}
          component={ButtonBase}
        >
          <Typography>Build your own custom Workout</Typography>
        </Paper>
      </Box>
    </Container>
  );
}
