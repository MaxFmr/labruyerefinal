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
  .logo {
    width: 250px;
    height: 250px;
    display: flex;
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
`;
export default StyledHero;
