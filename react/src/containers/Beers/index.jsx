import React from 'react';
import SingleBeer from '../../components/SingleBeer';

const Beers = (props) => {
  return (
    <React.Fragment>
      <props.NavBar/>
      {props.beers.map((beer) => {
        return <SingleBeer beer={beer} key={beer._id}/>
      })}
    </React.Fragment>
  )
}

export default Beers;