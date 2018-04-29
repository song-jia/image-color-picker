import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMousePosition } from '../model/action';

export class PreviewCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = null;
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    drawImage() {
        const ctx = this.canvas.getContext('2d');
        ctx.drawImage(this.props.image, ...centerImage(this.canvas, this.props.image));

        function centerImage(canvas, image) {
            let x = 0,
                y = 0,
                w = 0,
                h = 0;

            if (image.width >= image.height) {
                w = canvas.width < image.width ? canvas.width : image.width;
                h = w / image.width * image.height;
            } else {
                h = canvas.height < image.height ? canvas.height : image.height;
                w = h / image.height * image.width;
            }

            x = (canvas.width - w) / 2;
            y = (canvas.height - h) / 2;

            return [x, y, w, h];
        }
    }

    onMouseMove(e) {
        const img = e.target;
        let pos = findPos(img);
        let x = e.pageX - pos.x;
        let y = e.pageY - pos.y;
        // let ctx = this.canvas.getContext('2d');
        // let p = ctx.getImageData(x, y, 1, 1).data;
        console.log(x, y);
        this.props.setMousePosition(x / img.width, y / img.height);

        // let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

        function findPos(obj) {
            let curleft = 0, curtop = 0;
            if (obj.offsetParent) {
                do {
                    curleft += obj.offsetLeft;
                    curtop += obj.offsetTop;
                } while (obj = obj.offsetParent);
                return { x: curleft, y: curtop };
            }
            return undefined;
        }

        function rgbToHex(r, g, b) {
            return ((r << 16) | (g << 8) | b).toString(16);
        }
    }

    render() {
        return (
            <img
                alt=''
                src={this.props.imageSrc}
                onMouseEnter={this.onMouseMove}
                onMouseMove={this.onMouseMove}
            />
        );
    }
}

PreviewCanvas.propTypes = {
    imageSrc: PropTypes.string
};

const mapStateToProps = (state) => ({
    imageSrc: state.imageSrc
});

const mapDispatchToProps = (dispatch) => {
    return {
        setMousePosition: (x, y) => {
            dispatch(setMousePosition(x, y));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewCanvas);
