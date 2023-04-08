import Project from '../../projects/Project';
import './second-section.scss'
import React from 'react';
import fon7 from '../../../assets/bg/fon7.png'
import fon3 from '../../../assets/bg/fon3.png'
import fon6 from '../../../assets/bg/fon6.png'

const arr = [
    {
        name: "project-01",
        imageUrl: "fon7.png"
    },
    {
        name: "project-02",
        imageUrl: "../../../assets/bg/fon7.png"
    },
    {
        name: "project-03",
        imageUrl: "../../assets/bg/fon6.png"
    },
    {
        name: "project-04",
        imageUrl: "../../../assets/bg/fon6.png"
    },
    {
        name: "project-05",
        imageUrl: "../../assets/bg/fon6.png"
    }
]

const SecondSection = () => {
    return (
        <div className='second-section'>
            <div className='second-section__block'>
                <div className='second-section--wrapper'>
                    {arr.map((obj) => (
                        <Project name={obj.name} imageUrl={obj.imageUrl}/>
                    ))}
                </div>
            </div>

            <div className='second-section__block'>

            </div>
        </div> 
    );
};

export default SecondSection;