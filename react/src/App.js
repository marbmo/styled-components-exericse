import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Beers from './containers/Beers';
import { Switch, Route } from 'react-router-dom';

import beersAPI from './utils/axios';

class App extends Component {
  state = {
    beers: []
  }

  async componentDidMount() {
    const beers = await beersAPI.get('/all');
    this.setState({
      beers: beers.data
    })
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/beers' render={() => {return <Beers beers={this.state.beers} NavBar={NavBar}/>}}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
