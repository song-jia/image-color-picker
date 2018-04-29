import { SET_POINTER_POSITION, SET_IMAGE_SRC, SET_IMAGE_CANVAS, SET_POINTER_COLOR, SAVE_CURRENT_COLOR } from './action';

const initState = {
    imageSrc: '',
    imageCanvas: null,
    position: null,
    pointerColor: null,
    choseColors: []
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_POINTER_POSITION:
            return Object.assign({}, state, { position: action.pos });
        case SET_IMAGE_SRC:
            return Object.assign({}, state, { imageSrc: action.src });
        case SET_IMAGE_CANVAS:
            return { ...state, imageCanvas: action.canvas };
        case SET_POINTER_COLOR:
            return { ...state, pointerColor: action.color };
        case SAVE_CURRENT_COLOR:
            return { ...state, choseColors: [{ ...state.pointerColor }, ...state.choseColors] }
        default:
            return state;
    }
}
