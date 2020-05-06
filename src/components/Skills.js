import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import './skills.css';
import { useStyles } from '../config/muiStyles';
import Separator from './Separator';
import Progress from './Progress';
import { skills } from '../config/skills';

const Skills = () => {

    const classes = useStyles();

    return (
        <div id="compétences">
            <h1>Mes compétences</h1>
            <Separator />
                    <div style={{ height: '50px' }} />
                    <Grid className={classes.root} container spacing={7}>
                        <Grid item lg={2} xl={2} md={12} sm={12} xs={12} />
                        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                            <Bounce left>
                                <h3>Langages</h3>
                                <Progress text='HTML' percentage={90} />
                                <Progress text='CSS' percentage={80} />
                                <Progress text='JavaScript / TypeScript' percentage={80} />
                                <Progress text='SQL' percentage={70} />
                            </Bounce>  
                        </Grid>
                        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                            <Bounce right>
                                <h3>Frameworks / librairies</h3>
                                <Progress text='React / Redux' percentage={85} />
                                <Progress text='Node / Express' percentage={75} />
                            </Bounce>
                        </Grid>
                    </Grid>
                    <Grid className={classes.root} container>
                        <Grid item lg={2} xl={2} md={12} sm={12} xs={12} />
                        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                            <Bounce bottom>
                                <h3>En plus...</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                                    {skills.map((skill, index) => {
                                        return <Chip color='secondary' className={classes.chip} key={index} label={skill} />
                                    })}
                                </div>
                            </Bounce>
                        </Grid>
                    </Grid>
    
                
        </div>
    );
}

export default Skills;