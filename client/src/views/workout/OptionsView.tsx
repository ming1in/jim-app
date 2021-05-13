import React from 'react';

import {
    Box,
    Paper,
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
// import { FormControl } from '@material-ui/core';
import OptionsForm from "./OptionsForm";
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface IOptionsViewProps {
  setStep: Dispatch<SetStateAction<string>>;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            alignItems: "center",
        },
    })
);

function OptionsView(props: IOptionsViewProps) {
    const classes = useStyles();
    // const [muscleGroup, setMuscleGroup] = React.useState('');
    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //   setMuscleGroup(event.target.value as string);
    // };
    return (
        <Paper>
            {/* <Container maxWidth="sm" className = {classes.container}>
                <Button variant="contained" href="./workout" color="secondary">Go Back to Workout Choices</Button>
            </Container> */}
            <Container maxWidth="sm" className={classes.container}>
                <Card>
                    <Typography align="center">Pick Options</Typography>

                    <CardContent>
                        <OptionsForm setStep={props.setStep}/>
                    </CardContent>
                </Card>
            </Container>
        </Paper>
    );
}

export default OptionsView;
