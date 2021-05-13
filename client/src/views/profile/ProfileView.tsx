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
    Grid,
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    Paper
}
    from '@material-ui/core';
import { getUsers } from '../../api/users';
import EditProfileForm from "./EditProfileForm";
import { createDeflateRaw } from 'node:zlib';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            alignItems: "center",
            color: "primary"
        },
        card: {
            alignItems: "center"
        },
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
        goals: "To run a mile!",
        workoutIds: ["workout1", "workout2", "workout3", "workout4", "workout5"]
    }
    let pronouns = "he/him"; //default pronouns
    if (temp.gender == "Male") {
        pronouns = "he/him";
    } else if (temp.gender == "Female") {
        pronouns = "she/her";
    } else { //other
        pronouns = "they/them";
    }
    let randomQuote = ["You can do it!", "The only person stopping you, is you", "Do something today that your future self will thank you for", "Just do it", "Shoot for the moon, even if you miss, you'll land among the stars", "The pain you feel today, will be the strength you feel tomorrow", "The only bad workout is the one that did not happen", "When you feel like quitting, think about why you started"];
    let chosenRandomQuote = randomQuote[Math.floor(Math.random() * randomQuote.length)];

    return (
        <Box>
            <Box margin={5}>
                <Typography gutterBottom variant="h1" component="h2" color="textPrimary" align="center">
                    👋 Hello, {temp.firstName} {temp.lastName}
                </Typography>
            </Box>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Box display="flex" margin={5}>
                        <Paper>
                            <Typography variant="h4" component="p" color="textSecondary" align="center">
                                ✨ {chosenRandomQuote} ✨
                    </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item>
                    <Box display="flex" margin={5}>
                        <Card>
                            <CardContent style={{ backgroundColor: "secondary" }}>
                                <Grid container direction="column" spacing={3} alignItems="center">
                                    <Grid item>
                                        <Typography variant="h3" color="textSecondary" component="p">You live in <Box fontWeight='bold' display='inline'>{temp.city}</Box></Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" color="textSecondary" component="p">You weigh <Box fontWeight='bold' display='inline'>{temp.weight}</Box> kilograms</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" color="textSecondary" component="p">You are <Box fontWeight='bold' display='inline'>{temp.height}</Box> inches</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" color="textSecondary" component="p">You are <Box fontWeight='bold' display='inline'>{temp.age}</Box> years old</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" color="textSecondary" component="p">Your pronouns are <Box fontWeight='bold' display='inline'>{pronouns}</Box></Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" color="textSecondary" component="p">Your goal is <Box fontWeight='bold' display='inline'>{temp.goals.toLowerCase()}</Box></Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item>
                    <Box display="flex" margin={5}>
                        <Card>
                            <Table>
                                <TableHead>
                                    <Typography variant="h3" color="textSecondary" align="center">Workouts Saved</Typography>
                                </TableHead>
                                <TableBody>
                                    {temp.workoutIds.map(n => {
                                        return (
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="body2" color="textSecondary">{n}</Typography>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Card>
                    </Box>
                </Grid>
                <Grid item>
                    <Box display="flex" margin={5}>
                        <Button size="large" variant="contained" color="secondary">
                            Edit Profile
            </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
}

export default ProfileView;
