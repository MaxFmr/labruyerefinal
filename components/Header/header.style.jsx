import styled from 'styled-components';

const StyledHeader = styled.header`
  font-family: 'Abhaya Libre', serif;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;

  height: 60px;
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 10;

  @media (max-width: 1345px) {
    display: none;
  }

  font-size: 30px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
  .title {
    cursor: pointer;
    border: solid ${({ theme }) => theme.colors.green} 2px;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    margin-left: 80px;
    @media (max-width: 600px) {
      font-size: 14px;
      display: none;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    margin-left: 100px;
    @media (max-width: 1520px) {
      button {
        margin-left: 50px;
      }
    }
    @media (min-width: 1520px) {
      margin-left: 200px;
      button {
        margin-left: 70px;
      }
    }
    @media (max-width: 1520px) {
      width: auto;
      button {
        margin-left: 50px;
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
      color: #fbf3e0;
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
      :focus {
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
  .services {
    position: absolute;
    top: 60.1px;
    display: flex;
    left: 250px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8);

    flex-direction: column;
    padding: 20px;
    button {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-left: 0;
      width: inherit;
    }
    @media (min-width: 1520px) {
      left: 380px;
    }
  }
`;

export default StyledHeader;
