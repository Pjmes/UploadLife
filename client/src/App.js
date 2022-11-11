import React, { useEffect } from "react";
import { Container, Appbar, Typography, Grow, Grid, AppBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} postition="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>            
            <Grow in>
                <Container>
                    <Grid container justify-content="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;