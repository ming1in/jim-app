import React, { useState } from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";

function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().min(7).max(255).required("Password is required"),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        setIsLoading(true);
        try {
          setSubmitting(true);
        } catch (err) {
          setStatus({ success: false });
          setErrors(err);
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <Typography variant="h3">Sign up with Jim</Typography>
          </Box>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            placeholder="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            placeholder="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            error={Boolean(
              touched.passwordConfirmation && errors.passwordConfirmation
            )}
            fullWidth
            helperText={
              touched.passwordConfirmation && errors.passwordConfirmation
            }
            placeholder="Confirm password"
            margin="normal"
            name="passwordConfirmation"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.passwordConfirmation}
            variant="outlined"
          />
          <Box
            mt={2}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              {isLoading ? <CircularProgress /> : "Create Account"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default SignUpForm;
