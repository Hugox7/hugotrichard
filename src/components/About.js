import React from 'react';
import Grid from '@material-ui/core/Grid';

import './about.css';
import Separator from './Separator';
import { useStyles } from '../config/muiStyles';
import hugo from '../assets/hugo.jpg';

const About = () => {

    const classes = useStyles();

    const getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }

    const age = getAge('June 14, 1989');

    return (
        <div id="qui-suis-je">
            <h1>Qui suis-je ?</h1>
            <Separator />
            <div style={{ height: '90px' }} />
            <Grid className={classes.root} container justify="center" spacing={8}>
                
                <Grid item xl={2} lg={1} md={12} sm={12} xs={12} />
                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                
                    <img src={hugo} alt="hugo trichard" />
                
                </Grid>
                <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>

                    <div>
                        <h3>Je m'appelle Hugo Trichard, j'ai {age} ans et je suis développeur web.</h3>
                        <p>
                            Après m'être longtemps formé en autodidacte, j'ai décidé de me reconvertir en 2018 en intégrant la Wild Code School de
                            Paris où j'ai énormément appris durant 6 mois intensifs de projets et de cours.
                        </p>
                        <p>
                            J'ai ensuite pu effectuer un stage de 6 mois au sein de la société Ezeeworld à Neuilly-sur-Seine, qui m'a permis de consolider
                            mes acquis, de continuer à apprendre et de connaitre les specificités de ce métier au sein d'une agence Web. J'ai pu travailler sur différents
                            projets aussi bien en front qu'en back-end.
                        </p>
                        <p>
                            J'ai une préférence pour la partie front-end qui mêle créativité et design. J'ai malgré tout de bonnes connaissances en back-end
                            et je continue à me former tous les jours.
                        </p>
                        <p>
                            Et quand je ne code pas, j'aime jouer aux jeux vidéos notamment les RPG ou les jeux de stratégie, j'aime la randonnée et je pratique le
                            football américain en club.
                        </p>
                    </div>

                </Grid>  
            </Grid>
            <div style={{ height: '40px' }} />
        </div>
    );
}

export default About;
