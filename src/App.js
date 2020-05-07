import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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

                   <div className="wrap">
                        <div className="loading">
                            <div className="bounceball"></div>
                            <div className="text">CHARGEMENT...</div>
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
                    <Footer />
                </div>
            );
        }   
    }
}

export default App;
