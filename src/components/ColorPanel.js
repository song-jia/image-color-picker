import React from 'react';
import PartialPreview from './PartialPreview';

function ColorPanel() {
    return (
        <div className="color-panel">
            <PartialPreview />
            <ChoseColors />
        </div >
    );
}

function ChoseColors() {
    return <div className="chose-colors">
        <div className="row">
            <div className="color" style={{ background: '#ff0000' }}></div>
            <div className="colors">
                <div className="row">Hex: <input type="text" value="#FFFFFF" /></div>
                <div className="row">rgb: <input type="text" value="rgb(255, 255, 255)" /></div>
                <div className="row">rgba: <input type="text" value="rgba(255, 255, 255, 255)" /></div>
            </div>
        </div>
        <div class="row">
            <div className="color"></div>
            <div className="colors">
                <div className="row">Hex: <input type="text" value="#FFFFFF" /></div>
                <div className="row">rgb: <input type="text" value="rgb(255, 255, 255)" /></div>

                <div className="row">rgba: <input type="text" value="rgba(255, 255, 255, 255)" /></div>
            </div>
        </div>
    </div>;
}

export default ColorPanel;
