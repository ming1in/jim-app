import React from "react";

import {
  Card,
  CardContent,
  Container,
  Box,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default function LoginView() {
  const classes = useStyles();

  return (
    <Box display="flex" height="100%">
      <Container maxWidth="sm" className={classes.container}>
        <Card>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
