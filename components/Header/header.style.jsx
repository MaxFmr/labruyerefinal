import styled from 'styled-components';

const StyledHeader = styled.header`
  font-family: 'Abhaya Libre', serif;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;

  height: 50px;
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 10;

  @media (max-width: 600px) {
    height: 50px;
  }

  @media (max-width: 750px) {
    display: none;
  }

  font-size: 30px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
  justify-content: space-around;
  .title {
    cursor: pointer;
    border: solid ${({ theme }) => theme.colors.green} 2px;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    @media (max-width: 600px) {
      font-size: 14px;
      display: none;
    }
  }
  .buttons {
    width: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    @media (max-width: 1200px) {
      width: auto;
      button {
        margin-left: 20px;
      }
    }
    @media (max-width: 600px) {
      font-size: 30%;
      width: auto;
    }
    button {
      display: inline-block;
      font-family: 'Abhaya Libre', serif;
      font-size: 100%;

      background: none;
      border: none;
      color: #ffff;
      cursor: pointer;
      :after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #628eb3;

        transition: width 0.3s;
      }
      :hover::after {
        width: 100%;
        //transition: width .3s;
      }
    }
  }
`;

export default StyledHeader;