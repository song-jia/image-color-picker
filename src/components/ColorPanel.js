import React from 'react';
import PartialPreview from './PartialPreview';
import ChoseColors from './ChoseColors';

function ColorPanel() {
    return (
        <div className="color-panel">
            <PartialPreview />
            <ChoseColors />
        </div >
    );
}

export default ColorPanel;
