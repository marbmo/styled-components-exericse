import React, { Component } from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import { Home, Beers } from './containers';
import { NavBar, Beer, NewBeer } from './components';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/beers' component={Beers} />
            <Route path='/beer/:id' component={Beer} />
            <Route path='/random' component={Beer} />
            <Route path='/new-beer' component={NewBeer} />
          </Switch>
        </React.Fragment>
      </AppProvider>
    );
  }
}

export default App;
