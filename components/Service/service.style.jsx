import styled from 'styled-components';
const StyledService = styled.section`
  border: solid 2px red;
  display: flex;
  height: 100vh;
  .photo {
    border: solid 2px green;
  }
  .text {
    border: solid 4px pink;
    .para {
      border: solid;
    }
  }
`;
export default StyledService;
