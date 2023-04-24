import React from 'react';
import './progress-bar.scss'

const ProgressBar = (props) => {
    return (
        <div className='progress-bar'>
            <p>{props.title}</p>
            <div className='progress-bar__line'>
                <div className='progress-bar__inner' style={{width: props.value}}></div>
            </div>
        </div>
    );
};

export default ProgressBar;