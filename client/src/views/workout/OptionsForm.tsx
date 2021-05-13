import React, { useState } from "react";
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
    createStyles,
    CircularProgress,
} from "@material-ui/core";
//import * as Yup from "yup";
import { Formik } from "formik";

/**
 * this function creates the options form.
 * @returns 
 */
function OptionsForm() {
    const [group, setGroup] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGroup(event.target.value as string);
    };
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Formik enableReinitialize initialValues={{
            group: ""
        }}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                setIsLoading(true);
                try {
                    setSubmitting(true);
                } catch (err) {
                    setStatus({ success: false });
                    setErrors(err);
                    setSubmitting(false);
                }
            }}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Grid item spacing={3}>
                        <TextField id="standard-number" label="Number of Exercises" type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
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
                                value={group}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>Pick a Muscle Group</MenuItem>
                                <MenuItem value={"Abdominals"}>Abdominals</MenuItem>
                                <MenuItem value={"Abductors"}>Abductors</MenuItem>
                                <MenuItem value={"Adductors"}>Adductors</MenuItem>
                                <MenuItem value={"Biceps"}>Biceps</MenuItem>
                                <MenuItem value={"Calves"}>Calves</MenuItem>
                                <MenuItem value={"Chest"}>Chest</MenuItem>
                                <MenuItem value={"Forearms"}>Forearms</MenuItem>
                                <MenuItem value={"Glutes"}>Glutes</MenuItem>
                                <MenuItem value={"Hamstrings"}>Hamstrings</MenuItem>
                                <MenuItem value={"Lats"}>Lats</MenuItem>
                                <MenuItem value={"Lower Back"}>Lower Back</MenuItem>
                                <MenuItem value={"Middle Back"}>Middle Back</MenuItem>
                                <MenuItem value={"Neck"}>Neck</MenuItem>
                                <MenuItem value={"Quadriceps"}>Quadriceps</MenuItem>
                                <MenuItem value={"Shoulders"}>Shoulders</MenuItem>
                                <MenuItem value={"Stationary"}>Stationary</MenuItem>
                                <MenuItem value={"Traps"}>Traps</MenuItem>
                                <MenuItem value={"Treadmill"}>Treadmill</MenuItem>
                                <MenuItem value={"Triceps"}>Triceps</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Box
                        mt={2}
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Button
                            color="secondary"
                            disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            {isLoading ? <CircularProgress /> : "Go to Workout"}
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    );
}

export default OptionsForm;
