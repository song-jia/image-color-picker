export const SET_IMAGE_SRC = 'SET_IMAGE_SRC';
export const SET_IMAGE_CANVAS = 'SET_IMAGE_CANVAS';
export const SET_POINTER_POSITION = 'SET_MOUSE_POSITION';
export const SET_POINTER_COLOR = 'SET_POINTER_COLOR';

export function setImageSrc(src) {
    return {
        type: SET_IMAGE_SRC,
        src
    };
}

export function setImage(imageSrc) {
    return (dispatch) => {
        dispatch(setImageSrc(imageSrc));
        loadImageCanas();

        function loadImageCanas() {
            const img = new Image();

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, img.width, img.height);
                dispatch(setImageCanvas(canvas));
            };

            img.src = imageSrc;
        }
    }
}

export function setImageCanvas(canvas) {
    return {
        type: SET_IMAGE_CANVAS,
        canvas
    }
}

export function setMouseInfo(x, y) {
    return (dispatch, getState) => {
        const state = getState();

        if (state.imageCanvas === null) {
            return;
        }

        const pointerX = x * state.imageCanvas.width;
        const pointerY = y * state.imageCanvas.height;

        dispatch(setPointerPosition(pointerX, pointerY));
        dispatch(setPointerColor(getColor(pointerX, pointerY, getState().imageCanvas)));

        function getColor(x, y, canvas) {
            const ctx = canvas.getContext('2d');
            const p = ctx.getImageData(x, y, 1, 1).data;

            return {
                hex: hexString(...p),
                rgb: rgbString(...p),
                rgba: rgbaString(...p)
            };

            function hexString(r, g, b) {
                let hex = ((r << 16) | (g << 8) | b).toString(16);
                hex = "#" + ("000000" + hex).slice(-6);
                return hex;
            }

            function rgbString(r, g, b) {
                return `rgb(${r}, ${g}, ${b})`;
            }

            function rgbaString(r, g, b, a) {
                return `rgb(${r}, ${g}, ${b}, ${a})`;
            }
        }
    };
}

export function setPointerPosition(x, y) {
    return {
        type: SET_POINTER_POSITION,
        pos: { x, y }
    };
}

export function setPointerColor(color) {
    return {
        type: SET_POINTER_COLOR,
        color
    }
}
