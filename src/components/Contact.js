import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Alert } from '@material-ui/lab';

import './contact.css';
import { useStyles } from '../config/muiStyles';
import Separator from './Separator';

const Contact = () => {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const USER_ID = process.env.REACT_APP_USER_ID;
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

        const templateParams = {
            email,
            message,
        }

        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
            console.log(response);
            setResponse(response);
            setLoading(false);
            resetForm(); 
        } catch (error) {
            console.log(error);
            setError(error);
            resetForm();
        }
    }


    const resetForm = () => {
        setEmail('');
        setMessage('');
    }

    return (
        <div id='contact'>
            
            <h1>Contact</h1>
            <Separator />
            <div style={{ height: '90px' }} />
            <Grid className={classes.root} container spacing={6}>
                <Grid item xl={2} lg={2} md={12} sm={12} xs={12} />
                <Grid xl={4} lg={4} md={6} sm={12} xs={12} item>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <div className='alert-part'>
                            {error &&
                                <Alert onClose={() => setError(null)} severity="error">
                                    Erreur lors de l'envoi du message !
                                </Alert>
                            }
                            {response &&
                                <Alert onClose={() => setResponse(null)} severity="success">
                                    Merci pour votre message, je reviendrai vers vous rapidement :)
                                </Alert>
                            }
                        </div>
                        <TextValidator 
                            onChange={(e) => setEmail(e.target.value)} 
                            type='email' size='small' 
                            placeholder='Votre adresse email' 
                            variant='outlined'
                            name='email'
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['Champ obligatoire', 'Adresse mail non valide']}
                        />
                        <TextValidator 
                            onChange={(e) => setMessage(e.target.value)} 
                            multiline={true} 
                            type='text' 
                            size='small' 
                            placeholder='Votre message' 
                            variant='outlined' 
                            rows='10' 
                            name='message'
                            value={message}
                            className='text-input'
                            validators={['required']}
                            errorMessages={['Champ obligatoire']}
                        />
                        <Button 
                            className={classes.button} 
                            color='primary' 
                            variant='contained'
                            disabled={loading}
                            type='submit'
                            style={{ marginTop: '20px' }}
                        >
                            { loading ? <CircularProgress size={20}  color="secondary" /> : 'envoyer' }
                        </Button>
                    </ValidatorForm>
                </Grid>
                <Grid xl={4} lg={4} md={6} sm={12} xs={12} item>
                    <div id='infos'>
                        <p>Hugo Trichard</p>
                        <p>78510 - Triel sur Seine</p>
                        <p style={{ marginBottom: '30px' }}>Ile-de-France</p>
                        <p className='contact-info'><MailOutlineIcon style={{ marginRight: '5px' }} />hugo.trichard@gmail.com</p>
                        <p className='contact-info'><PhoneIcon style={{ marginRight: '5px' }} />06.83.11.83.44</p>
                        <div>
                            <a href="https://www.linkedin.com/in/hugo-trichard-881213170/" target='_blank' rel="noopener noreferrer">
                                <LinkedinOutlined style={{ fontSize: '45px', color: '#383838', marginRight: '6px' }} />
                            </a>
                            <a href="https://github.com/Hugox7" target='_blank' rel="noopener noreferrer">
                                <GithubOutlined style={{ fontSize: '45px', color: '#383838', marginLeft: '6px' }} />
                            </a>
                        </div>
                    </div>
                </Grid> 
            </Grid>
            <div style={{ height: '80px' }} />
        </div>
    );
}

export default Contact;