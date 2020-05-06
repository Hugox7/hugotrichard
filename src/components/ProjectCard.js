import React from 'react';
import { Tooltip } from '@material-ui/core';
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';

import './projectCard.css';
import { useStyles } from '../config/muiStyles';

const ProjectCard = ({ creation }) => {

    const classes = useStyles();

    return (
        <div className='card-project'>
            <img src={creation.photo} alt='project' />
            <div id='calc' >
                <div id='calc-content'>
                    <p>{creation.description}</p>
                </div>
                <div id='calc-buttons'>
                    {creation.url ? <a><LinkOutlined style={{ fontSize: '52px', color: '#ffb356', marginRight: '6px' }} /></a> : null}
                    <a><GithubOutlined style={{ fontSize: '52px', color: '#ffb356', marginLeft: '6px' }} /></a>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectCard;