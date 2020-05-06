import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
