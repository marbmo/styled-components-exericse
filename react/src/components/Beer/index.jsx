import React, { Component } from 'react';
import {
  StyledBeer,
  StyledImage,
  StyledDiv,
  Title,
  Tagline,
  Attenuation,
  Date,
  Description,
  ContributedBy,
  Paragraph,
  Animation
} from './styles';

import AppContext from '../../context/AppContext';

class Beer extends Component {
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      return this.context.searchBeer(id);
    } else {
      return this.context.searchBeer();
    }
  }

  componentWillUnmount() {
    this.context.clearBeer();
  }

  render() {
    const beer = this.context.state.beer;
    return (
      <React.Fragment>
        <this.context.NavBar />
        {Object.entries(beer).length === 0 ? (
          <Animation>Carregando</Animation>
        ) : (
          <StyledBeer>
            <StyledImage src={beer.image_url} alt={beer.name} />
            <StyledDiv>
              <Title>{beer.name}</Title>
              <Attenuation>{beer.attenuation_level}</Attenuation>
            </StyledDiv>
            <StyledDiv>
              <Tagline>{beer.tagline}</Tagline>
              <Date>{beer.first_brewed}</Date>
            </StyledDiv>
            <Description>{beer.description}</Description>
            <ContributedBy>{beer.contributed_by}</ContributedBy>
          </StyledBeer>
          // <StyledBeer>
          //   <StyledImage
          //     src={beer.image_url}
          //     alt={beer.name}
          //   />
          //   <StyledDiv>
          //     <Title>{beer.name}</Title>
          //     <Paragraph color='lightgray' size='20px'>
          //       {beer.attenuation_level}
          //     </Paragraph>
          //   </StyledDiv>
          //   <StyledDiv>
          //     <Paragraph color='lightgray' size='15px'>
          //       {beer.tagline}
          //     </Paragraph>
          //     <Paragraph color='black' size='15px' weight='bold'>
          //       {beer.first_brewed}
          //     </Paragraph>
          //   </StyledDiv>
          //   <Paragraph color='black' size='15px' weight='bold'>
          //     {beer.description}
          //   </Paragraph>
          //   <Paragraph color='lightgray' size='15px' weight='bold'>
          //     {beer.contributed_by}
          //   </Paragraph>
          // </StyledBeer>
        )}
      </React.Fragment>
    );
  }
}

Beer.contextType = AppContext;

export default Beer;
