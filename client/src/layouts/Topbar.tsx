import React, {useContext} from "react";

import {
  Typography,
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { ERoute } from "../enums/route";

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
    navItem: {
      marginLeft: theme.spacing(2)
    }
  })
);

function Topbar() {
  const auth = useContext(AuthContext)
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src="/static/logo.png" alt="Logo" className={classes.logo} />
        <Box display="flex" alignItems="center">
          <Link to={ERoute.WORKOUT} className={classes.navItem}>
            <Typography>Workout</Typography>
          </Link>
          <Link to={ERoute.PROFILE} className={classes.navItem}>
            <Typography>Profile</Typography>
          </Link>
          <Button onClick={auth?.signout}>Log out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
