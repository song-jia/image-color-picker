import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const previewWidth = 150;
const previewHeight = 150;
const zoom = 3;

class PartialPreview extends React.Component {

    drawImage() {
        const ctx = this.canvas.getContext('2d');
        ctx.drawImage(this.props.image,
            this.props.position.x * this.props.image.width - 25, this.props.position.y * this.props.image.height + 25, previewWidth / zoom, previewHeight / zoom,
            0, 0, previewWidth, previewHeight);
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
    image: PropTypes.object,
    position: PropTypes.object
};

const mapStateToProps = (state) => ({
    image: state.image,
    position: state.position
});

export default connect(mapStateToProps)(PartialPreview);
