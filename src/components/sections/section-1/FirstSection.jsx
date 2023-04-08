import './first-section.scss'
import React, { useState } from 'react';

import Video from '../../../assets/bg/Video.m4v'
import self from '../../../assets/img/self.png'

const FirstSection = () => {
    const [blockActive, setBlockActive] = useState(false)
    const [switchActive, setSwitchActive] = useState(false)

    const onStartClick = () => {
        setBlockActive(!blockActive)
        setSwitchActive(!switchActive)
        console.log(blockActive)
    }
    return (
        <div className='first-section'>
            <div className='first-section__video'>
                <video src={Video} autoPlay loop muted></video>
            </div>

            <div className='first-section__items'>
                <div className={blockActive ? 'first-section__second second--active' : 'first-section__second'}>
                    <div className='first-section__img-holder'><img className='first-section__img' src={self} alt="" /></div>
                    <div className='first-section__descr'>
                        Меня зовут Тилек. Родился 1 июля 2003 года в Таласской области. Окончил в Таласе детский сад,
                        после переехал в Бишкек. Где обучался в 5 гимназии (ныне 5 лицей). Особых достижений требующих
                        внимания нету. 
                    </div>         
                </div>

                <div className='first-section__btn' onClick={onStartClick}>
                    <div className={switchActive ? 'elipse elipse--active' : 'elipse'}>
                        <div className='circle'></div>
                    </div>
                </div>

                <div className={blockActive ? 'first-section__second second--active' : 'first-section__second'}>
                    <div className='first-section__descr'>
                        По характеру я человек сдержанный, вдумчивый, спокойный, разносторонний, с очень необычным чувством 
                        юмора. Увлекаюсь всеми видами спорта, вот прям все нравится. Люблю астрономию, космос, технологии, машины. 
                        Люблю рисовать, монтировать видео, битмейкинг. Пробовал себя в дизайнерстве, видео-монтаже, 2д анимации, музыка. 
                        На будущее, наверное как и все, планирую добиться достойного, стабильного, спокойного уровня жизни.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;