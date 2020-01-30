import React from 'react';
import styled from "styled-components";
import Card from '../../components/Card/Card';

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cards = () => {
  const cards = [
    {
      title: 'All Beers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida enim eget mauris pulvinar auctor. Nulla euismod purus feugiat ante vestibulum, id scelerisque augue condimentum. Nullam vel sem eros. Nulla massa orci, scelerisque ut felis at, fermentum interdum mauris. Donec porttitor libero id tortor rhoncus tincidunt. Donec sagittis tortor leo.',
      image: './images/beers.png'
    },
    {
      title: 'New Beer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida enim eget mauris pulvinar auctor. Nulla euismod purus feugiat ante vestibulum, id scelerisque augue condimentum. Nullam vel sem eros. Nulla massa orci, scelerisque ut felis at, fermentum interdum mauris. Donec porttitor libero id tortor rhoncus tincidunt. Donec sagittis tortor leo.',
      image: './images/new-beer.png'
    },
    {
      title: 'Random Beer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida enim eget mauris pulvinar auctor. Nulla euismod purus feugiat ante vestibulum, id scelerisque augue condimentum. Nullam vel sem eros. Nulla massa orci, scelerisque ut felis at, fermentum interdum mauris. Donec porttitor libero id tortor rhoncus tincidunt. Donec sagittis tortor leo.',
      image: './images/random-beer.png'
    }
  ];

  return (
    <CardsWrapper>
      {cards.map((element, index) => {
        return <Card title={element.title} description={element.description} image={element.image} key={index}/>
      })}
    </CardsWrapper>
  );
};

export default Cards;