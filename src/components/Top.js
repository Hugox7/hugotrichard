import React from 'react';
import Fade from 'react-reveal/Fade';
import { LinkedinOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';

import './top.css';

const Top = () => {
    return (
        <div id="top">
                <Fade top>
                    <h2>Développeur Web</h2>
                </Fade>
                <div id="top-links">
                    <Fade left>
                        <div className="logo-wrapper">
                            <a href="mailto:hugo.trichard@gmail.com"><MailOutlined style={{ fontSize: '40px', color: '#ffb356' }} /></a>  
                        </div>
                        <div className="logo-wrapper">
                            <a href="https://www.linkedin.com/in/hugo-trichard-881213170/" target='_blank' rel="noopener noreferrer">
                                <LinkedinOutlined style={{ fontSize: '40px', color: '#ffb356' }} />
                            </a>
                        </div>
                        <div className="logo-wrapper">
                            <a href="https://github.com/Hugox7" target='_blank' rel="noopener noreferrer"><GithubOutlined style={{ fontSize: '40px', color: '#ffb356' }} /></a>
                        </div>
                    </Fade>
                </div>
                <div id="top-info">
                    <Fade right>
                        <p>
                            " Bienvenue sur mon site, je m'appelle Hugo Trichard et je suis développeur web spécialisé front-end<br />
                            mais ayant également de bonnes connaissances en back-end. Bonne visite. "
                        </p>
                    </Fade>
                </div>
        </div>
    );
}

export default Top;