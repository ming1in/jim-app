import React, { useState } from "react";

import {
  makeStyles,
  createStyles,
  Paper,
  Avatar,
  Collapse,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
  Divider,
} from "@material-ui/core";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import * as Yup from "yup";
import { Formik } from "formik";

import useWorkouts from "../../../hooks/useWorkouts";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(4),
      flexGrow: 1,
      maxWidth: "50%",
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatarIcon: {
      width: "70%",
      height: "70%",
    },
    avatar: {
      height: 80,
      width: 80,
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    collapseContainer: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
  })
);

const CATEGORIES = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower back",
  "middle back",
  "neck",
  "quadriceps",
  "shoulders",
  "stationary",
  "traps",
  "triceps",
];

export default function GenWorkoutCard() {
  const workouts = useWorkouts();
  const classes = useStyles();

  const [openCollapse, setOpenCollapse] = useState(false);

  const toggleCollapse = () => setOpenCollapse(!openCollapse);

  const handleGenWorkout = (category: string) =>
    workouts.generate.mutate(category);

  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <FlashOnIcon className={classes.avatarIcon} />
      </Avatar>
      <Button variant="outlined" onClick={toggleCollapse}>
        Generate a random Workout
      </Button>
      <Collapse
        in={openCollapse}
        unmountOnExit
        className={classes.collapseContainer}
      >
        <Divider variant="middle" />
        <Formik
          initialValues={{
            category: "",
          }}
          validationSchema={Yup.object().shape({
            category: Yup.string().required("Please select a body part"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              setSubmitting(true);
              handleGenWorkout(values.category);
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
              <TextField
                fullWidth
                select
                error={Boolean(touched.category && errors.category)}
                helperText={touched.category && errors.category}
                label="Select a category"
                variant="outlined"
                margin="normal"
                name="category"
                value={values.category}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {CATEGORIES.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                type="submit"
                variant="contained"
              >
                {false ? <CircularProgress /> : "Generate"}
              </Button>
            </form>
          )}
        </Formik>
      </Collapse>
    </Paper>
  );
}
