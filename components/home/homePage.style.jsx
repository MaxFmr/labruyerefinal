import styled from 'styled-components';
const StyledHomePage = styled.section`
  height: 100%;
  text-decoration: none;
  box-sizing: border-box;
  video {
    overflow: scroll;
  }

  .header {
    height: 20%;
    padding-left: 5%;
    width: 100vw;
    position: absolute;
    opacity: 0.9;
    display: flex;
    .menuIcon {
      margin-left: 80%;
    }
    background-color: #2d8e8e;
  }
  .items {
    margin-right: 5%;
    position: absolute;
    left: 40%;
    top: 30%;
    @media (max-height: 300px) {
      top: 17%;
    }

    a {
      text-decoration: none;
      color: #fbf3e0;
      cursor: pointer;
      :focus {
        color: #2d8e8e;
      }
      :hover {
        color: #2d8e8e;
      }
    }
    @media (min-width: 768px) {
      font-size: 20px;
      left: 30%;
      top: 35%;
    }
    button {
      width: 100%;
      background-color: #2d8e8e;
      border: none;
      padding: 10px;
      font-size: larger;
      font-family: 'Abhaya Libre', serif;
      color: #fbf3e0;
      cursor: pointer;

      :hover {
        background-color: #257676;
      }
    }
  }
  .social {
    position: absolute;
    top: 40%;
    left: 7%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export default StyledHomePage;
