import styled from 'styled-components';
const StyledHomePage = styled.section`
  height: 100vh;
  text-decoration: none;
  box-sizing: border-box;
  video {
    overflow: scroll;
  }

  .header {
    height: 30%;
    padding-left: 5%;
    width: 100vw;
    position: absolute;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    margin-top: 4%;
    .menuIcon {
      margin-left: 80%;
    }
  }
  .items {
    margin-right: 5%;
    margin-top: 10%;

    position: absolute;
    left: 40%;
    top: 30%;
    font-family: 'Inknut Antiqua', serif;

    h1,
    h2 {
      margin-bottom: -10%;
      line-height: 35px;
      margin-bottom: 15px;
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
      font-weight: 300;
    }
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 25px;
      left: 25%;
      top: 25%;
    }
    @media (max-height: 600px) {
      font-size: 14px;
    }
    button {
      width: 100%;
      background-color: #257676;
      border: none;
      padding: 10px;
      font-size: larger;
      font-family: 'Abhaya Libre', serif;
      color: #fbf3e0;
      cursor: pointer;
      margin-top: 20%;
      font-weight: bolder;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        background-color: #2d8e8e;
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
  .scroll {
    @media (max-height: 600px) {
      display: none;
    }
    position: absolute;
    bottom: 5%;
    right: 10%;

    height: 40px;
    width: 40px;
    z-index: 10;
  }
`;
export default StyledHomePage;
