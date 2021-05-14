import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';

function BuildView() {
  return (
    <Box>
      <Typography>Build Your Own Workout Mode</Typography>
      <Button variant="contained" href="LaunchView">Continue to Workout</Button>
    </Box>
  );
}

export default BuildView;
