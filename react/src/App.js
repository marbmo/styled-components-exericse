import React, { Component } from 'react';
import './App.css';
import Cards from './containers/Cards/Cards'
// import NavBar from './components/NavBar';

class App extends Component {

  state = {

  };

  render() {
    return (
      <React.Fragment>
        {/* <NavBar/> */}
        <Cards/>
      </React.Fragment>
    );
  }
}

export default App;
