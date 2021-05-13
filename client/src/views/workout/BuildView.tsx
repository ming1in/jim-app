import React, { useState } from 'react';

import {
  Box, 
  Checkbox,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  FormControlLabel,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import {spacing} from '@material-ui/system';
import { getUsers } from '../../api/users';
import WorkoutView from './WorkoutView';
import LaunchView from './LaunchView';
import { Dispatch, SetStateAction } from 'react';
import { Box, Typography, Button } from '@material-ui/core';

interface IBuildViewProps {
  setStep: Dispatch<SetStateAction<string>>;
}

function BuildView(props: IBuildViewProps) {
  const temp = {name:"abs",category:["crunches", "sit ups", "push ups"]};
  return (

    <Box display="flex" justifyContent="center" flexDirection="column">
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
            <Paper>
              <Box p={5}>
              <Table>
                <TableHead>
                <Typography color="textSecondary" align="center">Selected Category: {temp.name}</Typography>
                </TableHead>
                <TableBody>
                  {temp.category.map(n => {
                    return (
                      <TableRow>
                        <TableCell>
                        <FormControlLabel control={<Checkbox name="chosenExercises"/> } label={n}/>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              </Box>
            </Paper>
        </Grid>
        <Grid item>
          <Box display="flex" margin={5}>
            <Button variant="contained" onClick={() => props.setStep('launch')}>Continue to Workout</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BuildView;