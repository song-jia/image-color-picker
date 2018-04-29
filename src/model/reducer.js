import { SET_MOUSE_POSITION, SET_IMAGE_SRC } from './action';

const initState = {
    imageSrc: '',
    position: null
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_MOUSE_POSITION:
            return Object.assign({}, state, { position: action.pos });
        case SET_IMAGE_SRC:
            return Object.assign({}, state, { imageSrc: action.src });
        default:
            return state;
    }
}
