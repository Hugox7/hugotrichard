import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {

    state = {
        loading: true,
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1800);
    } 

    render() {

        if (this.state.loading) {
            return (    
                <div id='loading'>

                   <div class="wrap">
                        <div class="loading">
                            <div class="bounceball"></div>
                            <div class="text">CHARGEMENT...</div>
                        </div>
                    </div>

                </div> 
            ); 
        } else {
            return (
                <div className="app">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main} />
                    </Switch>
                </div>
            );
        }   
    }
}

export default App;
