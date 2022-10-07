import styled from 'styled-components';
const StyledHero = styled.section`
  height: 95vh;
  background-image: url(${(props) => props.bg.path});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
  }
  .logo {
    width: 200px;
    height: 200px;
    display: flex;
    margin-top: -4%;
  }
  .text {
    width: 60%;
    font-style: italic;
    text-align: center;
    text-transform: capitalize;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: larger;
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
