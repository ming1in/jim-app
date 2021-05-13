import React from "react";

import {
  Typography,
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 100,
    },
    toolbar: {
      minHeight: 64,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      padding: "0",
      marginLeft: theme.spacing(8),
      paddingRight: theme.spacing(5),
    },
    logo: {
      marginLeft: `-${theme.spacing(4.5)}`,
    },
  })
);

function Topbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <Typography>Workout</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
