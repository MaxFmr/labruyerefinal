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
    .menuIcon {
      margin-left: 80%;
    }
  }
  .items {
    margin-right: 5%;
    margin-top: -20px;

    position: absolute;
    left: 40%;
    top: 30%;
    font-family: 'Inknut Antiqua', serif;
    font-weight: lighter;

    h1,
    h2 {
      margin-bottom: -10%;
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
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 30px;
      left: 25%;
      top: 30%;
    }
    @media (max-height: 600px) {
      font-size: 18px;
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
      margin-top: 20%;
      font-weight: bolder;

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
  .scroll {
    position: absolute;
    top: 75%;
    left: 75%;
    height: 30px;
    width: 30px;
    border: solid;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
export default StyledHomePage;
