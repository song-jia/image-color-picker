import React, { Component } from 'react';
import styles from './App.css';
import ImageCanvas from './components/ImageCanvas';
import RightPanel from './components/RightPanel';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <ImageCanvas />
                <RightPanel />
            </div>
        );
    }
}

export default App;
