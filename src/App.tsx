import React from 'react';

import 'normalize.css';
import './App.scss';

import AppRouter from './components/AppRouter';
import AppBar from './components/AppBar';

function App() {
    return (
        <>
            <AppBar />
            <AppRouter />
        </>
    );
}

export default App;
