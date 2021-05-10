import React from 'react';

import { Box, Typography, TextField, InputLabel, FormControl, Select, MenuItem, Grid, FormHelperText, InputAdornment } from '@material-ui/core';
import { getUsers } from '../../api/users';

//This is really EditProfileView.tsx
function ProfileView() {
    const [goal, setGoal] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGoal(event.target.value as string);
    };
    const [gender, setGender] = React.useState('');
    const handleChangeG = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGender(event.target.value as string);
    };
    return (
        <Box>
            <Typography>Edit Profile</Typography>

            <Grid>
                <form noValidate autoComplete="off">
                    <Grid item spacing={3}>
                        <TextField id="standard-basic" label="Email" />
                    </Grid>
                    <Grid item spacing={3}>
                        <TextField id="standard-number" label="Weight" type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item spacing={3}>
                        <TextField id="standard-number" label="Height" type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Inches</InputAdornment>,
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item spacing={3}>
                        <FormControl>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={gender}
                                onChange={handleChangeG}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>Gender</MenuItem>
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid>
                        <FormControl>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Goal</InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={goal}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>Pick a Goal</MenuItem>
                                <MenuItem value={"To get strong!"}>To get strong!</MenuItem>
                                <MenuItem value={"To lose weight!"}>To lose weight!</MenuItem>
                                <MenuItem value={"To tone!"}>To tone!</MenuItem>
                                <MenuItem value={"To run a marathon!"}>To run a marathon!</MenuItem>
                                <MenuItem value={"To run a mile"}>To run a mile!</MenuItem>
                                <MenuItem value={"To lose fat!"}>To lose fat!</MenuItem>
                                <MenuItem value={"To hit new PRs!"}>To hit new PRs!</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                </form>
            </Grid>
        </Box>
    );
}

export default ProfileView;
