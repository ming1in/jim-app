import React from 'react';

import { Box, Typography, Button, Grid, InputAdornment, TextField, MenuItem, InputLabel, Select } from '@material-ui/core';
import { getUsers } from '../../api/users';
import { FormControl } from '@material-ui/core';

function OptionsView() {
  console.log("hello")
  const [muscleGroup, setMuscleGroup] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMuscleGroup(event.target.value as string);
  };
  return (
    <Box>
      <Typography>Workout Options</Typography>
      <Grid>
        <form noValidate autoComplete="off">
          <Grid item spacing={3}>
            <TextField id="standard-number" label="Number of Exercises" type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid>
            <FormControl>
              <InputLabel shrink id="demo-simple-select-placeholder-label-label">Muscle Group</InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={muscleGroup}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>Pick a Muscle Group</MenuItem>
                <MenuItem value={"Abdominals"}>Abdominals</MenuItem>
                <MenuItem value={"Adductors"}>Adductors</MenuItem>
                <MenuItem value={"Quadriceps"}>Quadriceps</MenuItem>
                <MenuItem value={"Biceps"}>Biceps</MenuItem>
                <MenuItem value={"Shoulders"}>Shoulders</MenuItem>
                <MenuItem value={"Chest"}>Chest</MenuItem>
                <MenuItem value={"Hamstrings"}>Hamstrings</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </form>
      </Grid>
      <Button variant="contained" href="LaunchView">Continue to Workout</Button>
    </Box>
  );
}

export default OptionsView;
