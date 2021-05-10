import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';
import { getUsers } from '../../api/users';

function BuildView() {
  return (
    <Box>
      <Typography>Build Workout Modes</Typography>
      <Button variant="contained" href="">Build Custom Workout</Button>
    </Box>
  );
}

export default BuildView;
