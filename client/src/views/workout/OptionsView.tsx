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
        <Box display="flex" flexDirection="column">
            {/* <Container maxWidth="sm" className = {classes.container}>
                <Button variant="contained" href="./workout" color="secondary">Go Back to Workout Choices</Button>
            </Container> */}
            <Container maxWidth="sm" className={classes.container}>
                <Card>
                    <Typography align="center">Pick Options</Typography>

                    <CardContent>
                        <OptionsForm />
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}

export default OptionsView;
