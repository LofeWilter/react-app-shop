import React, { useEffect } from 'react';
import leftA from './assets/left.png';
import rightA from './assets/right.png';

function Slider({ slider, PrevSlide, NextSlide, ChangeAuto, AutoSlider }) {

    useEffect(() => {
        if (!slider.isSliderActive) {
            ChangeAuto()
            AutoSlider()
        }
    }, [])

    return (
        <div className="carousel">
            {slider.content.map((item, index) => {
                return (
                    index === slider.slideNumber ? <div key={index}>
                        {item}
                    </div> : null
                )
            })}
            <div className="arrows">
                <img src={leftA} alt="left arrow" className="leftA" onClick={PrevSlide} />
                <img src={rightA} alt="right arrow" className="rightA" onClick={NextSlide} />
            </div>
        </div>
    )
}

export default Slider
