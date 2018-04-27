import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                    ? <PreviewCanvas imageSrc={this.state.previewImage} />
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

class PreviewCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.anvas = null;
    }

    componentDidMount() {
        this.drawImage();
    }

    componentDidUpdate() {
        this.drawImage();
    }

    drawImage() {
        if (!this.props.imageSrc) {
            return;
        }

        const image = new Image();

        image.onload = () => {
            const ctx = this.canvas.getContext('2d');

            // ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);
            ctx.drawImage(image, ...centerImage(this.canvas, image));
        };

        image.src = this.props.imageSrc;

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

    render() {
        return (
            <canvas className="preview-canvas" ref={(ref) => {
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
    imageSrc: PropTypes.string
}

export default ImagePanel;
