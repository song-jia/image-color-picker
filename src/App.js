import React, { Component } from 'react';
import './App.css';
import ImagePanel from './components/ImagePanel';
import ColorPanel from './components/ColorPanel';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            currentPosition: null,
            selectedColors: []
        }
    }

    render() {
        return (
            <div className="app">
                <ImagePanel />
                <ColorPanel />
            </div>
        );
    }
}




export default App;
