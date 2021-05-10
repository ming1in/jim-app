import React from 'react';

import { Box, Typography, Button } from '@material-ui/core';
import { getUsers } from '../../api/users';

function OptionsView() {
  return (
    <Box>
      <Typography>Workout Options</Typography>
      <Button variant="contained" href="">Build Custom Workout</Button>
    </Box>
  );
}

export default OptionsView;
