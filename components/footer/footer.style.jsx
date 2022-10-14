import styled from 'styled-components';
const StyledFooter = styled.section`
  padding: 10%;
  width: 100vw;
  padding: 5px;
  height: 60px;
  background-color: #257676;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: smaller;
    font-family: 'Abhaya Libre', serif;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
export default StyledFooter;
