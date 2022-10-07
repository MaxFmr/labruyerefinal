import styled from 'styled-components';
const StyledMenu = styled.section`
  opacity: 0.95;
  height: 35vh;
  position: fixed;
  left: 0.1px;
  background-color: #fbf3e0;
  width: 70vw;
  margin: 2%;
  top: 2%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    font-size: larger;
    cursor: pointer;
  }
  li {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
  }
  .closeIcon {
    position: absolute;
    top: 10%;
    left: 80%;
    color: #257676;
  }
`;
export default StyledMenu;
