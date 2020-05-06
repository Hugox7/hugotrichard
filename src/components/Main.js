import React from 'react';

import Top from './Top';
import Skills from './Skills';
import Creations from './Creations';
import About from './About';
import Contact from './Contact';

const Main = () => {
    return (
        <div style={{ paddingTop: '0px'}}>
            <div id="accueil" style={{ height: '100px' }} />
            <Top />
            <Skills />
            <Creations />
            <About />
            <Contact />
        </div> 
    );
}

export default Main;