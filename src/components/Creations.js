import React from 'react';
import Grid from '@material-ui/core/Grid';
import Bounce from 'react-reveal/Bounce';

import './creations.css';
import { useStyles } from '../config/muiStyles';
import { creations } from '../config/creations';
import Separator from './Separator';
import ProjectCard from './ProjectCard';


const Creations = () => {

    const classes = useStyles();

    return (
        <div id='creations'>
            <h1>Mes créations</h1>
            <Separator />
            <div style={{ height: '60px' }} />
            <Bounce bottom>
                <Grid className={classes.root} container justify='center'>
                    {creations.map(creation => {
                        return <ProjectCard key={creation.id} creation={creation} />
                    })}
                </Grid>
            </Bounce>
            
            <div style={{ height: '30px' }} />
        </div>
    );
}

export default Creations;
