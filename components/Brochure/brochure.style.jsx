import styled from 'styled-components';
const StyledBrochure = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .link {
    margin-top: 5%;
    width: 300px;
    text-align: center;
    font-size: larger;
    a {
      color: #257676;
    }
    p {
      color: #257676;
      text-decoration: none;
      font-size: 22px;
    }
  }
`;
export default StyledBrochure;
