import React from 'react';

import { Box, Typography, TextField, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { getUsers } from '../../api/users';

function ProfileView() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <Box>
      <Typography>Profile</Typography>
      <form noValidate autoComplete="off">
    <TextField id="standard-basic" label="Gender" />
    <TextField id="standard-basic" label="Height" />
    <TextField id="standard-basic" label="Weight" />
    <TextField id="standard-basic" label="Email" />
    <FormControl>
        <InputLabel id="demo-simple-select-label">Goal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>To get strong!</MenuItem>
          <MenuItem value={20}>To lose weight!</MenuItem>
          <MenuItem value={30}>To tone!</MenuItem>
          <MenuItem value={40}>To run a marathon!</MenuItem>
        </Select>
      </FormControl>
    </form>
    </Box>
    
  );
}

export default ProfileView;
