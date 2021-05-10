import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';
import { getUsers } from '../../api/users';

function WorkoutView() {
  return (
    <Box >
      <Typography>Workout Modes</Typography>
      <Button variant="contained" href="./BuildView" color="primary">Build A Custom Workout</Button>
      <Button variant="contained" href="./BuildView" color="secondary">Select A Pre-Made Workout</Button>
    </Box>
  );
}

export default WorkoutView;
