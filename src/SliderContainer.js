import React from 'react'
import { connect } from 'react-redux';
import Slider from './Slider';
import { AutoSlider, ChangeAuto, NextSlide, PrevSlide } from './reducers/SliderReducer';

const mapStateToProps = (state) => {
    return {
        slider: state.slider
    }
}

const mapDispatchToProps = {
    NextSlide: NextSlide,
    PrevSlide: PrevSlide,
    AutoSlider: AutoSlider,
    ChangeAuto: ChangeAuto
}

const SliderContainer = connect(mapStateToProps, mapDispatchToProps)(Slider);

export default SliderContainer;
