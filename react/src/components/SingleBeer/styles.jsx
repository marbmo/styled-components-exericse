import styled from 'styled-components';

export const StyledSingleBeer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 30px;
    font-weight: 300;
    padding: 0;
    margin: 0;
    color: black;
  }

  .description {
    color: lightgray;
    padding: 0;
    margin: 0;
  }

  .contributedBy {
    
  }
`;

export default StyledSingleBeer;
