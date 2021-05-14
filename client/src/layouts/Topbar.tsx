import React, {useContext} from "react";

import {
  Typography,
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 100,
    },
    toolbar: {
      maxHeight: 64,
      overflow: "hidden",
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      padding: "0",
      marginLeft: theme.spacing(8),
      paddingRight: theme.spacing(5),
      display: "flex",
      justifyContent: "space-between",
    },
    logo: {
      maxHeight: 64,
    },
  })
);

function Topbar() {
  const auth = useContext(AuthContext)
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src="/static/logo.png" alt="Logo" className={classes.logo} />
        <Link to="/">
          <Typography>Workout</Typography>
        </Link>
        <Button onClick={auth?.signout}>Log out</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
