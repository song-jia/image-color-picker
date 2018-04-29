import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ColorViewer from './ColorViewer';

const previewWidth = 150;
const previewHeight = 150;
const zoom = 3;

class PartialPreview extends React.Component {

    drawImage() {
        const ctx = this.canvas.getContext('2d');
        const x = this.props.position.x;
        const y = this.props.position.y;

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, previewWidth, previewHeight);

        ctx.drawImage(
            this.props.imageCanvas,
            x - 25, y - 25, previewWidth / zoom, previewHeight / zoom,
            0, 0, previewWidth, previewHeight);

        drawCenterDot(ctx, previewWidth / 2, previewHeight / 2);

        function drawCenterDot(ctx, x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }

    render() {
        if (this.props.position) {
            this.drawImage();
        }

        return (
            <div className="partial-preview">
                <div className="preview">
                    <canvas width={previewWidth} height={previewHeight} ref={(canvas) => this.canvas = canvas} />
                </div>
                <ColorViewer color={this.props.color} />
            </div>
        );
    }
}

PartialPreview.propTypes = {
    imageCanvas: PropTypes.object,
    position: PropTypes.object,
    color: PropTypes.color
};

const mapStateToProps = (state) => ({
    imageCanvas: state.imageCanvas,
    position: state.position,
    color: state.pointerColor
});

export default connect(mapStateToProps)(PartialPreview);
