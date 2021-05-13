import React, {useState} from 'react';

import { Box, Typography, Button, Container } from '@material-ui/core';
import { getUsers } from '../../api/users';
import WorkoutView from './WorkoutView';
import LaunchView from './LaunchView';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface IBuildViewProps {
  setStep: Dispatch<SetStateAction<string>>;
}

function BuildView(props: IBuildViewProps) {
  return (
    <Box>
      {/* <Container maxWidth="sm" >
        <Button variant="contained" href="./workout" color="secondary">Go Back to Workout Choices</Button>
      </Container> */}
      <Typography>Build Your Own Workout</Typography>
      <Button variant="contained" onClick={() => props.setStep('launch')}>Continue to Workout</Button>
    </Box>
  );
}

export default BuildView;