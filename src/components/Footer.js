import React from 'react';

import './footer.css';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div id='footer'>
            © Hugo Trichard - {date}
        </div>
    );
}

export default Footer;