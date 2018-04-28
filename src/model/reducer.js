import { SET_IMAGE, SET_MOUSE_POSITION } from './action';

const initState = {
    image: null
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_IMAGE:
            return Object.assign({}, state, { image: action.image });
        case SET_MOUSE_POSITION:
            return Object.assign({}, state, { position: action.pos });
        default:
            return state;
    }
}
