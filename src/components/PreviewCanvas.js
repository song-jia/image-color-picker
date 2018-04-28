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

    componentDidMount() {
        this.drawImage();
    }

    componentDidUpdate() {
        this.drawImage();
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
        let pos = findPos(this.canvas);
        let x = e.pageX - pos.x;
        let y = e.pageY - pos.y;
        let ctx = this.canvas.getContext('2d');
        let p = ctx.getImageData(x, y, 1, 1).data;

        this.props.setMousePosition(x/this.canvas.width, y/this.canvas.height);

        let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

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
            <canvas
                className="preview-canvas"
                onMouseEnter={this.onMouseMove}
                onMouseMove={this.onMouseMove}
                ref={(ref) => {
                    if (ref) {
                        ref.width = ref.clientWidth;
                        ref.height = ref.clientHeight;
                    }

                    this.canvas = ref;
                }} />
        );
    }
}

PreviewCanvas.propTypes = {
    image: PropTypes.object
};

const mapStateToProps = (state) => ({
    image: state.image
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
