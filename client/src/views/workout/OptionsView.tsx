import React from 'react';

import {
  Box,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Grid,
  FormHelperText,
  InputAdornment,
  Button,
  makeStyles,
  Card,
  CardContent,
  Container,
  createStyles
} from '@material-ui/core';
import { getUsers } from '../../api/users';
// import { FormControl } from '@material-ui/core';
import OptionsForm from "./OptionsForm";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: "flex",
            alignItems: "center",
        },
    })
);

function OptionsView() {
  const classes = useStyles();
  // const [muscleGroup, setMuscleGroup] = React.useState('');
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setMuscleGroup(event.target.value as string);
  // };
  return (
    <Box>
      <Box display="flex" justifyContent="center" flexDirection="column">
            <Container maxWidth="sm" className = {classes.container}>
                <Typography align="center">Edit Profile</Typography>
            </Container>
            <Container maxWidth="md" className = {classes.container}>
                <Card>
                    <CardContent>
                        <OptionsForm/>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    </Box>
  );
}

export default OptionsView;
