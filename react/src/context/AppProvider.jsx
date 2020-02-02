import React, { Component } from 'react';

import AppContext from './AppContext';

import { NavBar } from '../components/';

import beersAPI from '../utils/axios';

class AppProvider extends Component {
  state = {
    beers: [],
    beer: {},
    message: ''
  };

  async componentDidMount() {
    try {
      const beers = await beersAPI.get('/all');
      return this.setState({
        beers: beers.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  searchBeer = async id => {
    try {
      let beer;
      if (id) {
        beer = await beersAPI.get(`/single/${id}`);
      } else {
        beer = await beersAPI.get('/random');
      }
      return this.setState({
        beer: beer.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  clearBeer = () => {
    return this.setState({
      beer: {}
    });
  };

  createNewBeer = async beerObj => {
    try {
      const newBeer = await beersAPI.post('/new', beerObj);
      this.setState({
        message: newBeer.data.message
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const contextValues = {
      state: this.state,
      searchBeer: this.searchBeer,
      clearBeer: this.clearBeer,
      createNewBeer: this.createNewBeer,
      NavBar: NavBar
    };

    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
