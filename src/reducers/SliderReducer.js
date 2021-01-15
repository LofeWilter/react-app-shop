import ConverterAdd from "../ConverterAdd";
import Promocode from "../Promocode";

const NEXT_SLIDE = 'NEXT_SLIDE';
const PREV_SLIDE = 'PREV_SLIDE';
const SET_AUTO = 'SET_AUTO';


let initialState = {
    content: [
        <Promocode />,
        <ConverterAdd />
    ],
    slideNumber: 0,
    isSliderActive: false,
    count: 0
}

const SliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_SLIDE': {
            return {
                ...state,
                slideNumber: state.slideNumber === state.content.length - 1 ? 0 : state.slideNumber + 1,
                count: state.count + 1
            }
        }
        case 'PREV_SLIDE': {
            return {
                ...state,
                slideNumber: state.slideNumber === 0 ? state.content.length - 1 : state.slideNumber - 1
            }
        }
        case 'SET_AUTO' : {
            return {
                ...state,
                isSliderActive: true
            }
        }
        default: return state
    }
}

export const NextSlide = () => {
    return {
        type: NEXT_SLIDE
    }
}

export const PrevSlide = () => {
    return {
        type: PREV_SLIDE
    }
}

export const ChangeAuto = () => {
    return {
        type: SET_AUTO
    }
}

export const AutoSlider = () => {
    return dispatch => {
        setInterval(()=> {
            dispatch(NextSlide())
        }, 5000);
        
    }
}

export default SliderReducer;