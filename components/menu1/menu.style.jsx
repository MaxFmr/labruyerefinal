import styled from 'styled-components';
const StyledMenu = styled.section`
  opacity: 0.95;
  height: 55vh;
  position: fixed;
  right: 0.1px;
  background-color: #fbf3e0;
  width: 70vw;
  @media (min-width: 700px) {
    width: 40vw;
  }
  @media (min-width: 1300px) {
    width: 30vw;
  }
  margin: 2%;
  top: 80px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  z-index: 100;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    font-size: 24px;
    cursor: pointer;
    @media (max-width: 400px) {
      font-size: 18px;
    }
  }
  li {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 7%;
  }
  ul {
    list-style-type: none;
  }
  .closeIcon {
    position: absolute;
    top: 10%;
    left: 70%;
    color: #257676;
    font-weight: bold;
  }
`;
export default StyledMenu;
