import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';
import { getUsers } from '../../api/users';
//import { getExercises } from '../../api/exercises'
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface ILaunchViewProps {
  setStep: Dispatch<SetStateAction<string>>;
}

function LaunchView(props: ILaunchViewProps) {
  return (
    <Box>
      <Typography>Workout Titles</Typography>
      <Typography>{}</Typography>
      <Button variant="contained" href="">Start Workout</Button>
      <Button variant="contained" href="">Stop Workout</Button>
    </Box>
  );
}

export default LaunchView;
