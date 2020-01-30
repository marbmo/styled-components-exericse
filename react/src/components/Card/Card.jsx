import React from 'react';
import StyledCardLinked from './StyledCardLinked';

const Card = props => {
  return (
    <StyledCardLinked>
      <img src={props.image} alt={props.title}/>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </StyledCardLinked>
  );
};

export default Card;