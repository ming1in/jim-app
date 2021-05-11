import React from 'react';

import { Box, Typography, Button, Card, CardContent} from '@material-ui/core';
import { getUsers } from '../../api/users';

function WorkoutView() {
  return (
    
    <Box>
      <Typography>Workout Modes</Typography>
      <Button variant="contained" href="./BuildView" color="secondary">Build A Custom Workout</Button>
      <Button variant="contained" href="./OptionsView" color="secondary">Select A Pre-Made Workout</Button>
    </Box>
  );
}

export default WorkoutView;