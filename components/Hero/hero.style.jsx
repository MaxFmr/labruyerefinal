import styled from 'styled-components';
const StyledHero = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  h1 {
    font-size: 45px;
    text-transform: uppercase;
    position: relative;
    margin-top: -4%;
    text-align: center;
  }
  .logo {
    width: 300px;
    height: 300px;
    display: flex;
    margin-top: -4%;
  }
  .text {
    width: 60%;
    font-style: italic;
    text-align: center;
    font-size: 18px;
    position: relative;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  .menuIcon {
    position: absolute;
    left: 85%;
    top: 10%;
    @media (min-width: 750px) {
      display: none;
    }
  }
`;
export default StyledHero;
