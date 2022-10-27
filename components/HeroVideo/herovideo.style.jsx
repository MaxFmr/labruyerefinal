import styled from 'styled-components';
const StyledHeroVideo = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    position: relative;
    margin-top: -4%;
    text-align: center;
  }
  .logo {
    width: 300px;
    height: 300px;
    display: flex;
    margin-top: -10%;
  }
  .text {
    width: 60%;
    h1 {
      margin-bottom: 0px;
    }
    span {
      font-style: italic;
    }
    text-align: center;
    font-size: 18px;
    position: relative;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  .menuIcon {
    position: fixed;
    right: 10%;
    bottom: 90%;
    z-index: 10;
    @media (min-width: 960px) {
      display: none;
    }
  }
`;
export default StyledHeroVideo;
