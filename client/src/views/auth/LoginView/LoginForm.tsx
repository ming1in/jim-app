import React, { useState } from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";
import { IAuthCredentials } from "../../../interfaces/auth";

export default function LoginForm() {
  const auth = useAuth();

  const handleLogin = async(credentials: IAuthCredentials) => {
    await auth.login.mutate(credentials);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().min(7).max(255).required("Password is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setSubmitting(true);
          handleLogin(values);
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
            <Typography variant="h3">Login</Typography>
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
              {auth.login.isLoading ? <CircularProgress /> : "Sign in"}
            </Button>
            {Boolean(auth.login.isError) && (
              <FormHelperText error>Something went wrong, check your credentials and try again</FormHelperText>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
}
