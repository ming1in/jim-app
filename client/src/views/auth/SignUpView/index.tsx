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

import SignUpForm from "./SignUpForm";
import { ERoute } from "../../../enums/route";

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
            <SignUpForm />
            <Box mt={1}>
              <Link
                component={RouterLink}
                to={ERoute.LOGIN}
                variant="body2"
                color="secondary"
              >
                Have an account? Click here to login
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SignUpView;
