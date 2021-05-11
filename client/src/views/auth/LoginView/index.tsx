import React from "react";

import {
  Card,
  CardContent,
  Container,
  Box,
  makeStyles,
  createStyles,
  Link
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import LoginForm from "./LoginForm";
import { ERoute } from "../../../enums/route";

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
            <Box mt={1}>
              <Link
                component={RouterLink}
                to={ERoute.SIGNUP}
                variant="body2"
                color="secondary"
              >
                Don&apos;t have an account? Click here to sign up
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
