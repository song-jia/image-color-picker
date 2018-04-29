import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropZone from 'react-dropzone';
import PreviewCanvas from './PreviewCanvas';
import PropTypes from 'prop-types';
import { setImage } from '../model/action';

class ImagePanel extends Component {
    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
    }

    onDrop(acceptFiles) {
        if (acceptFiles.length > 0) {
            this.props.setImage(acceptFiles[0].preview);
        }
    }

    chooseFile() {
        this.dropZone.open();
    }

    render() {
        return (
            <DropZone
                className="image-panel"
                disableClick
                multiple={false}
                onDrop={this.onDrop}
                ref={(ref) => { this.dropZone = ref }}
            >

                {this.props.imageSrc
                    ? <PreviewCanvas />
                    : <ChooseFile onClick={this.chooseFile} />}
            </DropZone>
        );
    }
}

function ChooseFile({ onClick }) {
    return (
        <div className="dnd-init">
            <span className="drop-text">Drop image here</span>
            <span>Or</span>
            <a className="link" onClick={onClick}>choose a image</a>
        </div>
    );
}

ImagePanel.propTypes = {
    imageSrc: PropTypes.string,
    setImage: PropTypes.func
}

const mapStateToProps = (state) => ({
    imageSrc: state.imageSrc
});

const mapDispatchToProps = (dispatch) => ({
    setImage: imageSrc => {
        dispatch(setImage(imageSrc));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePanel);
