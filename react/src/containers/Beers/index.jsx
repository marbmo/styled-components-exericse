import React from 'react';
import SingleListBeer from '../../components/SingleListBeer';

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
      <React.Fragment>
        <this.props.NavBar />
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='search'
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </form>
        {this.props.beers.map(beer => {
          return <SingleListBeer beer={beer} key={beer._id} />;
        })}
      </React.Fragment>
    );
  }
}

export default Beers;
