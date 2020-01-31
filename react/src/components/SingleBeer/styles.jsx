import styled from 'styled-components';

const StyledSingleBeer = styled.div`
  box-sizing: border-box;
  width: 40vw;
  margin: 0 auto;
  display: flex;
  height: 200px;

  .div-img {
    width: 100px;
    margin-right: 30px;
  }

  .div-img img {
    height: 100%;
  }

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
    padding: 20px 0;
  }

  .description {
    color: lightgray;
    padding: 0;
    margin: 0;
  }
`;

export default StyledSingleBeer;
