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
        imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        name: "project-03",
        imageUrl: "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.jpg?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ="
    },
    {
        name: "project-04",
        imageUrl: "https://emcore.com/wp-content/uploads/2022/09/PIC_hero_bkg.jpg"
    },
    {
        name: "project-05",
        imageUrl: "https://w0.peakpx.com/wallpaper/818/840/HD-wallpaper-heart-whatsapp-dp-love-profile-pic-unique-whatsapp-dp-xoxo-thumbnail.jpg"
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
                    <button className='second-section__btn' onClick={handleUpClick}>PREV</button>
                    <button className='second-section__btn' onClick={handleDownClick}>NEXT</button>
                </div>
            </div>

            <div className='second-section__block'>
                <h1>METADATA</h1>
            </div>
        </div> 
    );
};

export default SecondSection;