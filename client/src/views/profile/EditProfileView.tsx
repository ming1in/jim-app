/**
 * EditProfileView will have the form to change 
 * whatever you want for your thingy
 */
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
}
    from '@material-ui/core';
import EditProfileForm from "./EditProfileForm";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            alignItems: "center",
        },
    })
);


function ProfileView() {
    const classes = useStyles();
    return (
        <Box display="flex">
            <Container maxWidth="sm" className={classes.container}>
                <Grid container direction="column" alignItems="center" spacing={3}>
                    <Grid item>
                        <Button href='./ProfileView' color='secondary' fullWidth size="large" variant="contained">
                            Go Back To Profile
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography align="center" variant="h2" color="textSecondary">🏋🏻‍♀️ Edit Profile 🏋🏻‍♂️</Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography align="center" variant="body1" color="textSecondary">You may enter in any new information you want and your profile information will be updated.</Typography>
                                <EditProfileForm/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Card>
                </Card>
            </Container>
        </Box>
    )
}

export default ProfileView;
