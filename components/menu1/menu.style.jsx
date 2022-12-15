import styled from 'styled-components';
const StyledMenu = styled.section`
  opacity: 0.95;
  height: 500px;
  position: fixed;
  right: 0.1px;
  background-color: #2e8e8e;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
  padding-top: 30px;
  padding-bottom: 10px;
  border-radius: 5px;
  @media (max-width: 400px) {
    height: 450px;
  }
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
  z-index: 100;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 24px;
    cursor: pointer;
    :focus {
      color: ${({ theme }) => theme.colors.dark};
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
  }
  li {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 30px;
  }
  ul {
    list-style-type: none;
  }
  .closeIcon {
    cursor: pointer;
    position: absolute;
    top: 5%;
    left: 70%;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
  }
`;
export default StyledMenu;
