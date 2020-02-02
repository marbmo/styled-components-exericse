import React from 'react';
import AppContext from '../../context/AppContext';
import { SingleListBeer } from '../../components';

class Beers extends React.Component {
  state = {
    search: ''
  };

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(
      `${this.props.location.pathname}?search=${this.state.search}`
    );
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <React.Fragment>
            <context.NavBar />
            {context.state.beers.map(beer => {
              return <SingleListBeer beer={beer} key={beer._id} />;
            })}
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Beers;
