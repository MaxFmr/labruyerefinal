import styled from 'styled-components';
const StyledParallaxBanner = styled.section`
  height: 30vh;
  border: solid black 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 50vh;
  }
  .text {
    position: relative;
    margin-top: 5%;
    font-style: italic;
    font-weight: bold;
    font-size: 1.5em;
    @media (min-width: 768px) {
      font-size: 2em;
    }
  }
`;
export default StyledParallaxBanner;
