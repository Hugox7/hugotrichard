import React from 'react';
import { LinkedinOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';
import { Wave } from 'react-animated-text';

import './top.css';

const Top = () => {
    return (
        <div id="top">
                
                {/* <h2>Développeur Web</h2> */}
                <div  id='dev'>
                    <Wave 
                        text="Développeur Web" 
                        iterations={1}
                        effect="verticalFadeIn"
                        effectDirection="down"
                    
                    />
                </div>
                
                
                <div id="top-links">
                    
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
                    
                </div>
                <div id="top-info">
                    
                    <p>
                        " Bienvenue sur mon site, je m'appelle Hugo Trichard et je suis développeur web spécialisé front-end<br />
                        mais ayant également de bonnes connaissances en back-end. Bonne visite. "
                    </p>
                    
                </div>
                <div className='scroll-down' />
        </div>
    );
}

export default Top;