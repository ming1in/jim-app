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
 import { getUsers } from '../../api/users';
 import EditProfileForm from "./EditProfileForm";
 
 const useStyles = makeStyles((theme) =>
     createStyles({
         container: {
             display: "flex",
             alignItems: "center",
         },
     })
 );
 
 //This is really EditProfileView.tsx
 function ProfileView() {
     const classes = useStyles();
     return (
         <Box display="flex" height="100%">
             <Container maxWidth="sm" className = {classes.container}>
                 <Typography align="center">Edit Profile</Typography>
             </Container>
             <Container maxWidth="md" className = {classes.container}>
                 <Card>
                     <CardContent>
                         <EditProfileForm/>
                     </CardContent>
                 </Card>
             </Container>
         </Box>
     )
 }
 
 export default ProfileView;
 