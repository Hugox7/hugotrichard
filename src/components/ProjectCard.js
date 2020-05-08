import React from 'react';
//import { Tooltip } from '@material-ui/core';
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';

import './projectCard.css';

const ProjectCard = ({ creation }) => {

    return (
        <div className='card-project'>
            <img src={creation.photo} alt='project' />
            <h3>{creation.title}</h3>
            <div id='tools'>
                {creation.tools.map(tool => <img src={tool.pic} alt='tool' />)}
            </div>
            
            <div id='calc' >
                <div id='calc-content'>
                    <p>{creation.description}</p>
                </div>
                <div id='calc-buttons'>
                    {creation.url 
                        ?   <a href={creation.url} target='_blank' rel="noopener noreferrer">
                                <LinkOutlined style={{ fontSize: '52px', color: '#ffb356', marginRight: '6px' }} />
                            </a> 
                        : null
                    }
                    <a href={creation.code} target='_blank' rel="noopener noreferrer">
                        <GithubOutlined style={{ fontSize: '52px', color: '#ffb356', marginLeft: '6px' }} />
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectCard;