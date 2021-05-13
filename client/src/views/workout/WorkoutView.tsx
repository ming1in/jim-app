import React, { useState } from 'react';

import { Box, Typography, Button, Card, CardContent, Container, makeStyles, createStyles } from '@material-ui/core';
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
        return <OptionsView setStep={setStep}/>;
      case 'build':
        return <BuildView setStep={setStep}/>;
      case 'launch':
         return <LaunchView />;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Container maxWidth="sm" className={classes.container}>
        <Typography>Workout Modes</Typography>
      </Container>
      <Card>
        <CardContent>
          <Button variant="contained" onClick={() => setStep('build')} color="primary">Build A Custom Workout</Button>
          <Button variant="contained" onClick={() => setStep('options')} color="secondary">Select A Pre-Made Workout</Button>
          {getStepContent()}
        </CardContent>
      </Card>
    </Box>
  );
}

export default WorkoutView;