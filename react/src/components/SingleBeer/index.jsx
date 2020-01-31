import React from 'react';
import StyledSingleBeer from './styles';

const SingleBeer = (props) => {
  return (
    <StyledSingleBeer>
      <div className='div-img'>
        <img src={props.beer.image_url} alt={props.beer.name}/>
      </div>
      <div>
        <h2>{props.beer.name}</h2>
        <p className='description'>{props.beer.tagline}</p>
        <p className='contributedBy'>{props.beer.contributed_by}</p>
      </div>
    </StyledSingleBeer>
  )
}

export default SingleBeer;