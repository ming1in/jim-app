import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';

function LaunchView() {
  return (
    <Box>
      <Typography>Workout Titles</Typography>
      <Button variant="contained" href="">Start Workout</Button>
      <Button variant="contained" href="">Stop Workout</Button>
    </Box>
  );
}

export default LaunchView;
