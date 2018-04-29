import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const previewWidth = 150;
const previewHeight = 150;
const zoom = 3;

class PartialPreview extends React.Component {
    image = new Image();

    componentDidMount() {
        this.image.src = this.props.imageSrc;
    }

    componentDidUpdate() {
        this.image.src = this.props.imageSrc;
    }

    drawImage() {
        const ctx = this.canvas.getContext('2d');
        const x = this.props.position.x * this.image.width;
        const y = this.props.position.y * this.image.height;

        ctx.drawImage(
            this.image,
            x - 25, y - 25, previewWidth / zoom, previewHeight / zoom,
            0, 0, previewWidth, previewHeight);
        ctx.fillStyle = 'red';
        ctx.fillRect(73, 73, 4, 4);
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
                <div className="colors">
                    <div className="row"><span className="label">Hex:</span><input type="text" value="#FFFFFF" /></div>
                    <div className="row"><span className="label">rgb:</span><input type="text" value="rgb(255, 255, 255)" /></div>
                    <div className="row"><span className="label">rgba:</span><input type="text" value="rgba(255, 255, 255, 255)" /></div>
                </div>
            </div>
        );
    }
}

PartialPreview.propTypes = {
    imageSrc: PropTypes.string,
    position: PropTypes.object
};

const mapStateToProps = (state) => ({
    imageSrc: state.imageSrc,
    position: state.position
});

export default connect(mapStateToProps)(PartialPreview);
