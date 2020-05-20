import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '0 10px'
}

const list = {
    marginTop: '15px',
}

const Ezeeworld = () => {
    return (
        <div style={style}>
            <div style={{ maxWidth: '900px', margin: '90px 0 90px 0' }}>
                <h3 style={{ fontFamily: 'Catamaran' }}>
                    Détail de mes missions effectuées chez {' '}
                        <a href='https://www.ezeeworld.com' target='_blank' rel="noopener noreferrer"  style={{ color: '#00E0E1' }} >
                            Ezeeworld
                        </a> - 2019
                </h3>
                <ul>
                    <li>
                        Création d'une application web à destination d'une agence immobilière qui souhaite faire défiler ses annonces sur un écran. 
                        Cette application est développée avec ReactJS et tourne sur un Raspberry. Les annonces viennent d'une base de données alimentée
                        par le client. Il m'a fallu également intercaler des publicités venant d'une autre source de données toutes les 3 annonces.

                    </li>
                    <li style={list}>
                        Création d'une application web qui doit permettre d'afficher les résultats en direct du spectacle interactif de l'artiste Adri1.
                        Les spectateurs participent au spectacle grâce à une application disponible sur IOS et Android, ils répondent à des quizz, des questions,
                        des sondages et influencent le déroulement du spectacle qui n'est finalement jamais le même. Les résultats sont affichés en direct sur un écran.
                    </li>
                    <li style={list}>
                        Création d'une application web à usage interne permettant de gérer les clients, les projets, d'affecter des employés aux projets, gérer les congés,
                        et finalement savoir combien coute un projet et combien il peut rapporter. J'ai démarré ce projet from sratch et ai pu travailler
                        aussi bien en front qu'en back. J'ai développé l'API avec nodeJS, express mySQL et l'ORM knex/objection. Il m'a fallu également créer des scripts afin d'importer
                        dans la base SQL des données qui étaient auparavant contenues dans des fichiers excel.
                    
                    </li>
                </ul>
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <Button style={{ marginTop: '20px' }} variant='contained' color='primary'>Accueil</Button>
                </Link>
            </div> 
        </div>
    );
}

export default Ezeeworld;