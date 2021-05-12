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
 * this function creates the edit profile form.
 * @returns 
 */
function EditProfileForm() {
    const [goal, setGoal] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGoal(event.target.value as string);
    };
    const [gender, setGender] = React.useState('');
    const handleChangeG = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGender(event.target.value as string);
    };
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Formik initialValues={{
            email: ""
        }}
            /*validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
                })}*/
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
              {isLoading ? <CircularProgress /> : "Save Profile"}
            </Button>
          </Box>
                </form>
            )}
        </Formik>
    );
}

export default EditProfileForm;
