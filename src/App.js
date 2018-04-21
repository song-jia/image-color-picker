import React, { Component } from 'react';
import styles from './App.css';
import ImageCanvas from './components/ImageCanvas';
import RightPanel from './components/RightPanel';

class App extends Component {
    render() {
        return (
            <div className="app">
                <ImageCanvas />
                <RightPanel />
                <div className="image-panel">
                    <ChooseFile />
                </div>
                <ColorPanel />
            </div>
        );
    }
}

function ChooseFile() {
    return (
        <div className="dnd-init">
            <span className="drop-text">Drop image here</span><span>Or</span><a className="link">choose a image</a>
        </div >
    );
}

function ColorPanel() {
    return <div className="color-panel">
        <PartialPreview />
        <ChoseColors />
    </div >;
}

function PartialPreview() {
    return (
        <div className="partial-preview">
            <div className="preview"><canvas /></div>
            <div className="colors">
                <div className="row"><span className="label">Hex:</span><input type="text" value="#FFFFFF" /></div>
                <div className="row"><span className="label">rgb:</span><input type="text" value="rgb(255, 255, 255)" /></div>
                <div className="row"><span className="label">rgba:</span><input type="text" value="rgba(255, 255, 255, 255)" /></div>
            </div>
        </div>);
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
                <div>Hex: <input type="text" value="#FFFFFF" /></div>
                <div>rgb: <input type="text" value="rgb(255, 255, 255)" /></div>
                <div>rgba: <input type="text" value="rgba(255, 255, 255, 255)" /></div>
            </div>
        </div>
    </div>;
}

export default App;
