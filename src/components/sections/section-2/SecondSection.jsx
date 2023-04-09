import Project from '../../projects/Project';
import './second-section.scss'
import React, { useEffect, useRef, useState } from 'react';
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
        imageUrl: "assets/bg/fon7.png"
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
        imageUrl: "../../../../assets/bg/fon6.png"
    }
]



const SecondSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollBlockRef = useRef(null);
  
    useEffect(() => {
      if (scrollBlockRef.current) {
        scrollBlockRef.current.scrollTop = currentIndex * 290;
      }
    }, [currentIndex]);


    const handleUpClick = () => {
        setCurrentIndex(currentIndex === 0 ? arr.length - 1 : currentIndex - 1);
        console.log("upped")
      };
      
      const handleDownClick = () => {
        setCurrentIndex(currentIndex === arr.length - 1 ? 0 : currentIndex + 1);
        console.log("downed")
      };

    return (
        <div className='second-section'>
            <div className='second-section__block'>
                <div className='second-section--wrapper' ref={scrollBlockRef}>
                    {arr.map((obj , index) => (
                        <Project key={index} num={index} curInd={currentIndex} name={obj.name} imageUrl={obj.imageUrl}/>
                    ))}
                </div>

                <div className='second-section__buttons'>
                    <button className='second-section__btn' onClick={handleUpClick}>UP</button>
                    <button className='second-section__btn' onClick={handleDownClick}>DOWN</button>
                </div>
            </div>

            <div className='second-section__block'>
                <h1>METADATA</h1>
            </div>
        </div> 
    );
};

export default SecondSection;