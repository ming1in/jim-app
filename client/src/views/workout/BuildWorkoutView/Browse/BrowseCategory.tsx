import React from "react";

import {
  ButtonBase,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Box,
  Button,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router";
import { ERoute } from "../../../../enums/route";

const MUSCLE_GROUPS = [
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
  "treadmill",
  "triceps",
];

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

interface IBrowseCategoryProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<any>>;
}

export default function BrowseCategory(props: IBrowseCategoryProps) {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => history.push(ERoute.WORKOUT);

  return (
    <>
      <Box mb={3}>
        <Button onClick={handleBack} startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
        <Typography variant="h3">Choose a muscle</Typography>
      </Box>
      <Grid container spacing={1}>
        {MUSCLE_GROUPS.map((muscle) => (
          <Grid item xs={3}>
            <Card
              className={classes.card}
              component={ButtonBase}
              onClick={() => props.setSelectedCategory(muscle)}
            >
              <CardContent>
                <Typography>{muscle}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
