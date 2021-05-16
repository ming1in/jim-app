import React from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";

interface ISignUpFormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

function SignUpForm() {
  const { signup } = useAuth();

  const handleSignUp = async ({ email, password }: ISignUpFormValues) => {
    await signup.mutate({ email, password });
  };

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
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Password is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setSubmitting(true);
          handleSignUp(values);
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
              {signup.isLoading ? <CircularProgress /> : "Create Account"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default SignUpForm;
