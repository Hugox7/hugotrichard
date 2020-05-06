import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { HomeOutlined } from '@ant-design/icons';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import StickyHeader from 'react-sticky-header';
import Drawer from '@material-ui/core/Drawer';

import './header.css';
import 'react-sticky-header/styles.css';
import logo from '../assets/logo4.png';
 
const Header = () => {

    const [visible, setVisible] = useState(false);

    const handleReload = () => {
        window.location.reload();
        window.location.href = '#accueil';
    }

    const handleShowDrawer = () => {
        setVisible(true);
    }

    const handleHideDrawer = () => {
        setVisible(false);
    }

    return (
        <StickyHeader 
            header={
                <div id="header"> 
                    <div id="logo" onClick={handleReload}>
                        <img src={logo} alt="logo de Hugo Trichard" />
                    </div>
                    <div id="nav">
                        <Link
                            className='link-home'
                            to="/#top"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        ><HomeOutlined style={{ fontSize: 25 }} /></Link>
                        <Link
                            className='link'
                            to="/#compétences"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >Mes compétences</Link>
                        <Link
                            className='link'
                            to="#creations"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >Mes créations</Link>
                        <Link
                            className='link'
                            to="/#qui-suis-je"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >Qui suis-je ?</Link>
                        <Link
                            className='link'
                            to="/#contact"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >Contact</Link>
                    </div>
                    <div id='nav-responsive' onClick={handleShowDrawer}>
                        <MenuIcon fontSize='large' />
                    </div>
                    <Drawer anchor='right' onClose={handleHideDrawer} open={visible}>
                        <img src={logo} alt="logo" style={{ position: 'absolute', height: '70px', top: '10px', left: '10px' }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <CloseIcon onClick={handleHideDrawer} />
                        </div>
                        <div style={{ marginTop: '75px', display: 'flex', flexDirection: 'column' }}>
                            <Link
                                className='link-responsive'
                                to="/#top"
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            ><HomeOutlined style={{ fontSize: 25 }} /></Link>
                            <Link
                                className='link-responsive'
                                to="/#compétences"
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Mes compétences</Link>
                            <Link
                                className='link-responsive'
                                to="/#creations"
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Mes créations</Link>
                            <Link
                                className='link-responsive'
                                to="/#qui-suis-je"
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Qui suis-je ?</Link>
                            <Link
                                className='link-responsive'
                                to="/#contact"
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >Contact</Link>
                        </div>
                    </Drawer>
                </div>
            }
        />
    );
}

export default Header;