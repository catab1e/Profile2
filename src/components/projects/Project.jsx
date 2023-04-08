import './project.scss'
import React from 'react';

import fon7 from '../../assets/bg/fon7.png'

const Project = (props) => {
    return (
        <div className='project'>
            <div className='project__img-holder'>
                <img className='project__img' src={props.imageUrl} alt="" />
                {console.log(props.imageUrl)}
            </div>
            <div className='project__descr'>{props.name}</div>
        </div>
    );
};

export default Project;