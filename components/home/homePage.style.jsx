import styled from 'styled-components';
const StyledHomePage = styled.section`
  text-decoration: none;
  height: 100vh;
  li {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }

  right: 0;
  bottom: 0;
  min-width: 100%;
  height: 100vh;
  object-fit: cover;

  .logo {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 220px;
    margin-bottom: -15px;
  }

  .items {
    position: fixed;
    top: 0.1%;

    color: #f1f1f1;
    width: 100%;
    padding: 20px;

    .nav {
      margin-left: 10%;
      @media (min-width: 768px) {
        margin-left: 17%;
        margin-top: 5%;
      }
    }

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 13px;
      font-weight: 100;
      letter-spacing: 0.25rem;
      animation-duration: 1s;
      animation-name: slidein;
      @keyframes slidein {
        from {
          margin-left: 100%;
          width: 300%;
        }

        to {
          margin-left: 0%;
          width: 100%;
        }
      }
    }
    ul {
      list-style-type: none;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      width: 300px;

      margin-left: -40px;
    }
    li {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 8%;
      width: auto;
      @media (min-width: 768px) {
        font-size: 1em;
      }

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .contactbtn {
      ≈ span {
        text-decoration: none;
      }
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 50px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
      transition: background-color 1000ms ease;
      letter-spacing: 0.45px;

      :hover {
        background-color: ${({ theme }) => theme.colors.green};
      }
    }
    .social {
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 25px;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
export default StyledHomePage;
