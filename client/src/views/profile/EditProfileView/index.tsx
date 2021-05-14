import React from "react";

import {
  Box,
  Typography,
  makeStyles,
  Container,
  createStyles,
} from "@material-ui/core";

import EditProfileForm from "./EditProfileForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
  })
);

function EditProfileView() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box display="flex" flexDirection="column">
        <Typography align="center" variant="h2" color="textSecondary">
          🏋🏻‍♀️ Edit Profile 🏋🏻‍♂️
        </Typography>
        <EditProfileForm />
      </Box>
    </Container>
  );
}

export default EditProfileView;
