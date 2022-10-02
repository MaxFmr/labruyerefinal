import styled from 'styled-components';
const StyledHomePage = styled.section`
  position: fixed;

  right: 0;
  bottom: 0;
  min-width: 100%;
  height: 100vh;
  border: solid 5px white;
  object-fit: cover;

  .logo {
    position: fixed;
    top: 7%;
    left: 10%;
    height: 60px;
    width: 60px;
  }

  .items {
    position: fixed;
    bottom: 15%;
    left: 16%;
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 13px;
      font-weight: 100;
      letter-spacing: 0.25rem;
    }
    ul {
      list-style-type: none;
      font-size: 2rem;
      margin-left: -40px;
    }
    li {
      margin-bottom: 1.5rem;
    }
    .contactbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 50px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      font-weight: bolder;
      margin-top: 50px;
    }
    .social {
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 20px;
    }
  }
`;
export default StyledHomePage;
