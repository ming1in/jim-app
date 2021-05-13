import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { getUsers } from '../../api/users';

function AuthView() {
  return (
    <Box>
      <Typography>Authentication</Typography>
    </Box>
  );
}

export default AuthView;
