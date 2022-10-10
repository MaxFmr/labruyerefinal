import styled from 'styled-components';
const StyledHero = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    text-transform: uppercase;
    position: relative;
    margin-top: -4%;
  }
  .logo {
    width: 400px;
    height: 400px;
    display: flex;
    margin-top: -4%;
  }
  .text {
    width: 60%;
    font-style: italic;
    text-align: center;
    text-transform: capitalize;
    font-size: 16px;
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
