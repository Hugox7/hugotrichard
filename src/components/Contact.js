import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './contact.css';
import { useStyles } from '../config/muiStyles';
import Separator from './Separator';

const Contact = () => {

    const classes = useStyles();

    return (
        <div id='contact'>
            <h1>Contact</h1>
            <Separator />
            <div style={{ height: '90px' }} />
            <Grid className={classes.root} container spacing={8}>
            <Grid item xl={1} lg={1} md={12} sm={12} xs={12} />
                <Grid xl={4} lg={4} md={6} sm={12} xs={12} item>
                    <form classes={classes.form}>
                        <TextField type='email' size='small' placeholder='Votre adresse email' variant='outlined' />
                        <TextField multiline={true} type='text' size='small' placeholder='Votre message' variant='outlined' rows='10' />
                        <Button className={classes.button} variant='contained' color='secondary'>Envoyer</Button>
                    </form>
                </Grid>
                <Grid xl={5} lg={5} md={6} sm={12} xs={12} item>
                    2
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;