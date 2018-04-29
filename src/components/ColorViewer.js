import React from 'react';
import PropTypes from 'prop-types';

export default function ColorViewer({ color }) {
    return (
        <div className='color-viewer'>
            <div className='color-preview' style={{ backgroundColor: color ? color.rgba : 'white' }}></div>
            <div className="colors">
                <div className="row">
                    <span className="label">Hex: {color ? color.hex : ''}</span>
                </div>
                <div className="row">
                    <span className="label">rgb: {color ? color.rgb : ''}</span>
                </div>
                <div className="row">
                    <span className="label">rgba: {color ? color.rgba : ''}</span>
                </div>
            </div>
        </div>
    );
}

ColorViewer.propTypes = {
    color: PropTypes.object
}