import React from 'react';

import { Box, Typography, Button, Grid } from '@material-ui/core';
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
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <Typography>Workout Titles</Typography>
        </Grid>
        <Grid item alignItems="center">
          <Box>
            <Button variant="contained" href="">Start Workout</Button>
          </Box>
          <Box>
          <Button variant="contained" href="">Stop Workout</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LaunchView;
