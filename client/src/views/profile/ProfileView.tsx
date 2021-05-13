/**
 * EditProfileView will have the form to change 
 * whatever you want for your thingy
 */
import React from 'react';
import {
    Box,
    Typography,
    Button,
    makeStyles,
    Card,
    CardContent,
    Container,
    createStyles,
    Avatar,
    CardActions,
    Grid
}
    from '@material-ui/core';
import EditProfileForm from "./EditProfileForm";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            alignItems: "center",
            color: "primary"
        },
        card: {
            alignItems: "center",
            color: "primary"
        }
    })
);

//This is really EditProfileView.tsx
//the button to go to edit profile no longer works
function ProfileView() {
    const classes = useStyles();

    //temporary solution for a user
    const temp = {
        firstName: "John",
        lastName: "Smith",
        city: "Hoboken",
        weight: "161",
        height: "200",
        age: 25,
        gender: "Male",
        goals: "To run a mile!"
    }
    let pronouns = "he/him"; //default pronouns
    if (temp.gender == "Male") {
        pronouns = "he/him";
    } else if (temp.gender == "Female") {
        pronouns = "she/her";
    } else {
        pronouns = "they/them";
    }
    let randomQuote = ["You can do it!", "The only person stopping you, is you", "Push yourself", "Just do it", "Shoot for the moon, even if you miss, you'll land among the stars"];
    let chosenRandomQuote = randomQuote[Math.floor(Math.random() * randomQuote.length)];

    return (
        <Container className={classes.container}>
            <Card>
                <Grid container direction="column" alignItems="center" spacing={3}>
                    <Grid item spacing={3}>
                        <Typography gutterBottom variant="h1" component="h2" color="textPrimary">
                            👋 Hello, {temp.firstName} {temp.lastName}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="p" color="secondary">
                            ✨ {chosenRandomQuote} ✨
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="textSecondary" component="p">You live in {temp.city}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="textSecondary" component="p">You weigh {temp.weight} kilograms</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="textSecondary" component="p">You are {temp.height} inches</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="textSecondary" component="p">You are {temp.age} years old</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="textSecondary" component="p">Your pronouns are {pronouns}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="textSecondary" component="p">Your goal is {temp.goals.toLowerCase()}</Typography>
                    </Grid>
                    <Grid item>
                        <Button size="large" variant="contained" color="secondary">
                            Edit Profile
                    </Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}

export default ProfileView;
