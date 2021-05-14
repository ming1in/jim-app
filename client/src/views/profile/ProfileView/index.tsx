import React from "react";

import {
  Paper,
  Box,
  Container,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import UserProfileDetail from "./UserProfileDetailCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    profilePaper: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
      maxWidth: '50%'
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
        <UserProfileDetail className={classes.profilePaper} />
        <Paper className={classes.workoutPaper}>
          <Typography> workout stuff</Typography>
        </Paper>
      </Box>
    </Container>
  );
}
