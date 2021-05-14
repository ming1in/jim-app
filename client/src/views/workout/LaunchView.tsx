import React from 'react';

import { Box, Typography, Button, Grid, ButtonGroup } from '@material-ui/core';

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
          <ButtonGroup>
          <Button variant="contained" href="">Start Workout</Button>
          <Button variant="contained" href="">Stop Workout</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LaunchView;
