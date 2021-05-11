import React from "react";

import {
  Card,
  CardContent,
  Container,
  Box,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import SignUpForm from "./SignUpForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
    },
  })
);

function SignUpView() {
  const classes = useStyles();

  return (
    <Box display="flex" height="100%">
      <Container maxWidth="sm" className={classes.container}>
        <Card>
          <CardContent>
            <SignUpForm/>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SignUpView;
