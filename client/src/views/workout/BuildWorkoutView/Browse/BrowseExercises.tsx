import React from "react";

import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Button,
  Box,
  ButtonBase,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import userExercises from "../../../../hooks/useExercises";
import { IExercise } from "../../../../interfaces/workout";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

interface IBrowseExercisesProps {
  category?: string;
  selectedExercises: { [id: string]: IExercise };
  handleBack: () => void;
  onClickExercise: (exercise: any) => void;
}

export default function BrowseExercises(props: IBrowseExercisesProps) {
  const classes = useStyles();
  const exercises = userExercises();

  const { data: excercises } = exercises.fetchAll(props.category);

  if (!excercises) return null;

  return (
    <>
      <Box mb={3}>
        <Button onClick={props.handleBack} startIcon={<ArrowBackIosIcon />}>
          Categories
        </Button>
        <Typography variant="h3">{`Choose a ${props.category} workout`}</Typography>
      </Box>
      <Grid container spacing={1}>
        {excercises?.map((exercise) => (
          <>
            {!props.selectedExercises[exercise._id] && (
              <Grid item xs={3} key={exercise._id}>
                <Card
                  className={classes.card}
                  component={ButtonBase}
                  onClick={() => props.onClickExercise(exercise)}
                >
                  <CardContent>
                    <Typography>{exercise.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </>
  );
}
