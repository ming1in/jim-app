import React, { useContext, useRef, useState } from "react";

import {
  Avatar,
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  ButtonBase,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { AuthContext } from "../context/AuthProvider";
import { ERoute } from "../enums/route";
import Logo from "../components/Logo";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 100,
    },
    toolbar: {
      maxHeight: 64,
      overflow: "hidden",
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      display: "flex",
    },
    avatarIcon: {
      width: "100%",
      height: "100%",
    },
    popover: {
      width: 200,
    },
    navItem: {
      marginLeft: theme.spacing(3),
    },
  })
);

export default function Topbar() {
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <Box ml={2} flexGrow={1} />

        <Button
          className={classes.navItem}
          component={Link}
          to={ERoute.PROFILE}
          color="secondary"
        >
          Profile
        </Button>

        <Button
          className={classes.navItem}
          component={Link}
          to={ERoute.WORKOUT}
          color="secondary"
        >
          Workout
        </Button>

        <Avatar
          ref={ref}
          onClick={handleOpen}
          className={classes.navItem}
          component={ButtonBase}
        >
          <AccountCircleIcon className={classes.avatarIcon} />
        </Avatar>
        <Menu
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          keepMounted
          PaperProps={{ className: classes.popover }}
          getContentAnchorEl={null}
          anchorEl={ref.current}
          open={isOpen}
        >
          <MenuItem onClick={auth?.signout}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
