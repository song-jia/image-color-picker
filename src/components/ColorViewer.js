import React from 'react';
import PropTypes from 'prop-types';

export default function ColorViewer({ color }) {
    const hex = color ? color.hex : '';
    const rgb = color ? color.rgb : '';
    const rgba = color ? color.rgba : '';

    return (
        <div className='color-viewer'>
            <div className='color-preview' style={{ backgroundColor: rgba }}></div>
            <div className="colors">
                <div className="row">
                    {hex && <ColorDisplay label={'Hex'} value={hex} />}
                </div>
                <div className="row">
                    {rgb && <ColorDisplay label={'RGB'} value={rgb} />}
                </div>
                <div className="row">
                    {rgba && <ColorDisplay label={'RGBA'} value={rgba} />}
                </div>
            </div>
        </div>
    );
}

function ColorDisplay({ label, value }) {
    const input = React.createRef();

    const copyClickHandler = () => {
        input.current.select();
        document.execCommand("copy");
    }

    return (
        <React.Fragment>
            <span className="label">{label}</span><input value={value} ref={input} /> <button onClick={copyClickHandler}>copy</button>
        </React.Fragment>
    );
}

ColorViewer.propTypes = {
    color: PropTypes.object
}