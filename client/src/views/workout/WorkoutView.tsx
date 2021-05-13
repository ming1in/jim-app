import React, { useState } from 'react';

import { Box, Typography, Button, Card, CardContent, Container, makeStyles, createStyles, Grid } from '@material-ui/core';
import { getUsers } from '../../api/users';
import { MenuItem } from 'material-ui';
import OptionsView from './OptionsView';
import BuildView from './BuildView';
import LaunchView from './LaunchView';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
    },
  })
);

function WorkoutView() {
  const classes = useStyles();
  var [step, setStep] = useState("");

  const getStepContent = () => {
    switch (step) {
      case 'options':
        return <OptionsView setStep={setStep} />;
      case 'build':
        return <BuildView setStep={setStep} />;
      case 'launch':
        return <LaunchView setStep={setStep} />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <Box m="2rem"/>
          <Typography variant="h2" color="textSecondary">Workout Modes</Typography>
          <Typography variant="h6" color="textSecondary" align = "center">please select a workout mode from below:</Typography>
        </Grid>
        <Grid item>
          <Box p={3}>
            <Button size="large" variant="contained" onClick={() => setStep('build')} color="secondary">Build A Custom Workout</Button>
          </Box>
        </Grid>
        <Grid item>
          <Box p={3}>
            <Button size="large" variant="contained" onClick={() => setStep('options')} color="secondary">Select A Pre-Made Workout</Button>
          </Box>
          {getStepContent()}
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkoutView;