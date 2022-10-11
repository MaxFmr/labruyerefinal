import styled from 'styled-components';
const StyledParallaxBanner = styled.section`
  padding: 3%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};

  @media (min-width: 768px) {
    height: 50vh;
  }
  .text {
    color: #fbf3e0;
    position: relative;
    margin-top: 5%;
    font-style: italic;
    font-weight: bold;
    font-size: 1.5em;
    @media (min-width: 768px) {
      font-size: 2em;
    }
  }
  .logo {
    position: relative;
  }
`;
export default StyledParallaxBanner;
