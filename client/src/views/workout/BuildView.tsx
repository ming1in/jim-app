import React, { useState } from 'react';

import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import { getUsers } from '../../api/users';
import WorkoutView from './WorkoutView';
import LaunchView from './LaunchView';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface IBuildViewProps {
  setStep: Dispatch<SetStateAction<string>>;
}

function BuildView(props: IBuildViewProps) {
  const temp = ["crunches", "sit ups", "push ups"];
  return (

    <Box>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Box display="flex" margin={5}>
            <Card>
              <Table>
                <TableHead>
                  <Typography variant="h3" color="textSecondary" align="center">Category List of Exercises</Typography>
                </TableHead>
                <TableBody>
                  {temp.map(n => {
                    return (
                      <TableRow>
                        <TableCell>
                          <Typography variant="body2" color="textSecondary">{n}</Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </Box>
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