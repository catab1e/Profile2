import React from 'react';
import './fourth-section.scss'
import ProgressBar from '../../progress-bar/ProgressBar';

const FourthSection = () => {
    return (
        <div className='fourth-section'>
            <div className='fourth-section__left'>
                <div className='fourth-section__upper'>
                    <ProgressBar title="CSS" value={"100%"}/>
                    <ProgressBar title="HTML" value={"95%"}/>
                    <ProgressBar title="JS" value={"30%"}/>
                    <ProgressBar title="REACT" value={"45%"}/>
                    <ProgressBar title="TS" value= {"5%"}/>
                </div>
                    <p className='nokia'>NOKIA</p>
                <div className='fourth-section__lower'>
                    <p>SOME INFO</p>
                </div>
            </div>

            <div className='fourth-section__center'>
                <p>WANTED</p>
                <div className='fourth-section__center-img'>

                </div>
                <div className='fourth-section__center-descr'>
                    <div className='descr'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, sequi ullam. Eveniet sapiente, ea quidem, ratione tempore deserunt accusamus mollitia quae dolorem magni sequi, necessitatibus velit molestias eos. Et quos ab, corporis voluptatem facere magni nam dolorem non distinctio illum? Repellendus libero quibusdam error velit assumenda, quas recusandae voluptas excepturi.
                    </div>
                    <div className='descr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae consequatur molestiae distinctio exercitationem enim possimus, unde architecto iste numquam, consectetur excepturi quos nostrum placeat hic quisquam aspernatur. Aut, animi assumenda ipsa sunt placeat rerum blanditiis similique deleniti sapiente quidem, enim, nostrum at a id facere. Neque facere explicabo enim?
                    </div>
                    <div className='descr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nulla explicabo eum nostrum ex incidunt, perferendis at obcaecati laudantium, temporibus rem aliquid? Id, ipsum nulla. Eligendi debitis reiciendis voluptatum harum quibusdam quasi. Ipsum inventore placeat sed voluptates delectus, rerum blanditiis accusamus voluptatum iusto deleniti modi vitae repudiandae, nulla pariatur ipsa.
                    </div>
                </div>
            </div>

            <div className='fourth-section__right'>

            </div>
        </div>
    );
};

export default FourthSection;