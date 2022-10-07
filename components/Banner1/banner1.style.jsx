import styled from 'styled-components';
const StyledBanner1 = styled.section`
  height: 25vh;
  @media (min-width: 768px) {
    height: 40vh;
  }
  margin: 3% 0px 3% 0px;
  background-image: url(${(props) => props.bg.path});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export default StyledBanner1;
