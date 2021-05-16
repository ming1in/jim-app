import React from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  InputLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  makeStyles,
  createStyles,
  TextField,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import useAuth from "../../../hooks/useAuth";

const genderMenuItems = ["Male", "Female", "Other"];
const goalMenuItems = [
  "Weight loss",
  "Strength Training",
  "Mental wellbeing",
  "Powerlifting",
  "Bodybuilding",
  "Tone and sculpt",
  "Running",
  "Get into working out",
  "Overall fitness",
];

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  })
);

export default function RegistrationForm() {
  const auth = useAuth();
  const classes = useStyles();

  const handleRegister = (details: any) => {
    auth.register.mutate(details);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        gender: "",
        goal: "",
        height: null,
        weight: null,
        city: "",
        age: null,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        gender: Yup.string().required("Please enter your gender"),
        goal: Yup.string().required("Please enter your goal"),
        height: Yup.number()
          .min(0, "Invalid height")
          .required("Please enter your height"),
        weight: Yup.number()
          .min(0, "Invalid weight")
          .required("Please enter your weight"),
        city: Yup.string().required("Please enter a city"),
        age: Yup.number()
          .min(0, "Invalid age")
          .required("Please enter your age"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setSubmitting(true);
          handleRegister(values);
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
          <Box mb={3} mr={10}>
            <Typography variant="h4">Tell us a bit about you</Typography>
          </Box>
          <Box display="flex">
            <Box mr={1} width="50%">
              <TextField
                error={Boolean(touched.firstName && errors.firstName)}
                fullWidth
                helperText={touched.firstName && errors.firstName}
                placeholder="First name"
                margin="normal"
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                variant="outlined"
              />
            </Box>
            <Box ml={1} width="50%">
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                fullWidth
                helperText={touched.lastName && errors.lastName}
                placeholder="Last name"
                margin="normal"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={1} width="50%">
              <FormControl
                fullWidth
                variant="outlined"
                className={classes.margin}
              >
                <InputLabel htmlFor="height-input">Height</InputLabel>
                <OutlinedInput
                  id="height-input"
                  name="height"
                  error={Boolean(touched.height && errors.height)}
                  value={values.height}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelWidth={60}
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">inch(es)</InputAdornment>
                  }
                />
              </FormControl>
              {Boolean(Boolean(touched.height && errors.height)) && (
                <FormHelperText error>{errors.height}</FormHelperText>
              )}
            </Box>
            <Box ml={1} width="50%">
              <FormControl
                fullWidth
                variant="outlined"
                className={classes.margin}
              >
                <InputLabel htmlFor="weight-input">Weight</InputLabel>
                <OutlinedInput
                  id="weight-input"
                  name="weight"
                  error={Boolean(touched.weight && errors.weight)}
                  value={values.weight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  labelWidth={60}
                  endAdornment={
                    <InputAdornment position="end">lbs</InputAdornment>
                  }
                />
              </FormControl>
              {Boolean(Boolean(touched.height && errors.height)) && (
                <FormHelperText error>{errors.height}</FormHelperText>
              )}
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={1} width="50%">
              <TextField
                fullWidth
                select
                error={Boolean(touched.gender && errors.gender)}
                helperText={touched.gender && errors.gender}
                label="Gender"
                variant="outlined"
                margin="normal"
                name="gender"
                value={values.gender}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {genderMenuItems.map((genderItem) => (
                  <MenuItem key={genderItem} value={genderItem}>
                    {genderItem}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box ml={1} width="50%">
              <TextField
                error={Boolean(touched.age && errors.age)}
                fullWidth
                helperText={touched.age && errors.age}
                placeholder="Age"
                margin="normal"
                name="age"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                variant="outlined"
              />
            </Box>
          </Box>
          <TextField
            error={Boolean(touched.city && errors.city)}
            fullWidth
            helperText={touched.city && errors.city}
            placeholder="City"
            margin="normal"
            name="city"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            variant="outlined"
          />
          <TextField
            fullWidth
            select
            error={Boolean(touched.goal && errors.goal)}
            helperText={touched.goal && errors.goal}
            label="Goal"
            variant="outlined"
            margin="normal"
            name="goal"
            value={values.goal}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            {goalMenuItems.map((goalItem) => (
              <MenuItem key={goalItem} value={goalItem}>
                {goalItem}
              </MenuItem>
            ))}
          </TextField>
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              {auth.register.isLoading ? <CircularProgress /> : "Done"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
