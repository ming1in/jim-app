import React from 'react';

import { Box, Typography, Button, Card, CardContent, Container, makeStyles, createStyles } from '@material-ui/core';
import { getUsers } from '../../api/users';
import { MenuItem } from 'material-ui';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
    },
  })
);

function WorkoutView() {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Container maxWidth="sm" className={classes.container}>
        <Typography>Workout Modes</Typography>
      </Container>
      <Card>
        <CardContent>
          <Button variant="contained" href="./BuildView" color="primary">Build A Custom Workout</Button>
          <Button variant="contained" href="./OptionsView" color="secondary">Select A Pre-Made Workout</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default WorkoutView;
