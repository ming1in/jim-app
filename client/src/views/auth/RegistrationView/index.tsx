import React from "react";

import {
  Card,
  CardContent,
  Container,
  Box,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import RegistrationForm from "./RegistrationForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default function RegistationView() {
  const classes = useStyles();

  return (
    <Box display="flex" height="100%">
      <Container maxWidth="sm" className={classes.container}>
        <Card>
          <CardContent>
            <RegistrationForm />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
