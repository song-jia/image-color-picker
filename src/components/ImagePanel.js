import React, { Component } from 'react';
import DropZone from 'react-dropzone';

class ImagePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImage: ''
        };

        this.onDrop = this.onDrop.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
    }

    onDrop(acceptFiles) {
        if (acceptFiles.length > 0) {
            console.log(acceptFiles[0].preview);
            this.setState({
                previewImage: acceptFiles[0].preview
            });
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

                {this.state.previewImage
                    ? <PreviewCanvas image={this.state.previewImage} />
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

function PreviewCanvas({ image }) {
    return (
        <img src={image} alt="" />
    );
}

export default ImagePanel;
