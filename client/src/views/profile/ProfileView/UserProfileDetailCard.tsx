import React, { useContext, useState } from "react";

import clsx from "clsx";
import {
  Paper,
  Avatar,
  makeStyles,
  createStyles,
  Typography,
  Box,
  useTheme,
  IconButton,
} from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { AuthContext } from "../../../context/AuthProvider";
import { ERoute } from "../../../enums/route";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      height: 100,
      width: 100,
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    avatarIcon: {
      width: "100%",
      height: "100%",
    },
    root: {
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(4),
      flexDirection: "column",
    },
    detailTitle: {
      flexGrow: 1,
    },
    detailIcon: {
      marginRight: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function UserProfileDetail(props: any) {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const theme = useTheme();

  const userDetails = [
    { title: "Goal", text: auth?.currentUser?.goal },
    { title: "Height", text: `${auth?.currentUser?.height} in` },
    { title: "Weight", text: `${auth?.currentUser?.weight} lb` },
    { title: "Gender", text: auth?.currentUser?.gender },
    { title: "Age", text: auth?.currentUser?.age },
    { title: "City", text: auth?.currentUser?.city },
  ];

  return (
    <Paper className={clsx(classes.root, props.className)}>
      <Avatar className={classes.avatar}>
        <AccountCircleIcon className={classes.avatarIcon} />
      </Avatar>
      <Box display="flex" justifyContent="center" mt={2}>
        <Typography variant="h4">
          {`${auth?.currentUser?.firstName} ${auth?.currentUser?.lastName}`}
        </Typography>
        <IconButton component={Link} to={ERoute.EDIT_PROFILE}>
          <BorderColorIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        pt={3}
        borderTop={`1px solid ${theme.palette.background.default}`}
      >
        {userDetails.map((detail) => (
          <Box
            display="flex"
            alignItems="center"
            padding={2}
            bgcolor={theme.palette.background.default}
            marginBottom={2}
            borderRadius={50}
          >
            <Avatar className={classes.detailIcon} sizes="lg">
              <FitnessCenterIcon />
            </Avatar>
            <Typography variant="h6" className={classes.detailTitle}>
              {detail.title}
            </Typography>
            <Typography variant="h6">{detail.text}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
