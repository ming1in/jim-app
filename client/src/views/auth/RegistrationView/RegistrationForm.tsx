import React, { useState } from "react";

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
} from "@material-ui/core";

const genderMenuItems = ["Male", "Female"];
const goalMenuItems = ["Weight loss", "Core/Abs", "Bicep"]

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  })
);

export default function RegistrationForm() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        gender: null,
        goal: null,
        height: 0,
        weight: 0,
      }}
      validationSchema={Yup.object().shape({
        
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
          <Box mb={3} mr={10}>
            <Typography variant="h4">Tell us a bit about you</Typography>
          </Box>
          <FormControl fullWidth variant="outlined" className={classes.margin}>
            <InputLabel htmlFor="height-input">Height</InputLabel>
            <OutlinedInput
              id="height-input"
              name="height"
              error={Boolean(touched.height && errors.height)}
              value={values.height}
              onChange={handleChange}
              onBlur={handleBlur}
              labelWidth={60}
              endAdornment={
                <InputAdornment position="end">inch(es)</InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" className={classes.margin}>
            <InputLabel htmlFor="height-input">Weight</InputLabel>
            <OutlinedInput
              id="height-input"
              name="height"
              error={Boolean(touched.height && errors.height)}
              value={values.height}
              onChange={handleChange}
              onBlur={handleBlur}
              labelWidth={60}
              endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            />
          </FormControl>
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
              {isLoading ? <CircularProgress /> : "Done"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
