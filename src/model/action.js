export const SET_MOUSE_POSITION = 'SET_MOUSE_POSITION';
export const SET_IMAGE_SRC = 'SET_IMAGE_SRC';

export function setMousePosition(x, y) {
    return {
        type: SET_MOUSE_POSITION,
        pos: { x, y }
    };
}

export function setImageSrc(src) {
    return {
        type: SET_IMAGE_SRC,
        src
    };
}
