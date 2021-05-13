import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';
import { getUsers } from '../../api/users';
//import { getExercises } from '../../api/exercises'

function LaunchView() {
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
