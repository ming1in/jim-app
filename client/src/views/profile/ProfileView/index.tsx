import React from "react";

import {
  Box,
  Container,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import UserProfileDetailCard from "./UserProfileDetailCard";
import UserWorkoutsCard from "./UserWorkoutsCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    profilePaper: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
      maxWidth: "50%",
    },
    workoutPaper: {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

export default function ProfileView() {
  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" mt={5}>
        <UserProfileDetailCard className={classes.profilePaper} />
        <UserWorkoutsCard className={classes.profilePaper} />
      </Box>
    </Container>
  );
}
