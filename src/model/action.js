export const SET_IMAGE = 'SET_IMAGE';
export const SET_MOUSE_POSITION = 'SET_MOUSE_POSITION';

export function setImage(image) {
    return {
        type: SET_IMAGE,
        image
    };
}

export function loadImage(imageSrc) {
    return dispatch => {
        const image = new Image();

        image.onload = () => {
            dispatch(setImage(image));
        };

        image.src = imageSrc;
    }
}

export function setMousePosition(x, y) {
    return {
        type: SET_MOUSE_POSITION,
        pos: {x, y}
    };
}
