import styled from 'styled-components';
const StyledHomePage = styled.section`
  position: fixed;

  right: 0;
  bottom: 0;
  min-width: 100%;
  height: 100vh;
  object-fit: cover;

  .logo {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .items {
    position: fixed;
    top: 7%;
    @media (min-width: 768px) {
      top: 1%;
    }
    color: #f1f1f1;
    width: 100%;
    padding: 20px;

    .nav {
      margin-left: 10%;
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
      @media (min-width: 768px) {
        font-size: 3rem;
      }
      margin-left: -40px;
      animation-duration: 1s;
      animation-name: slideleft;
      margin-bottom: 20px;
      @keyframes slideleft {
        from {
          margin-left: -1000px;
        }

        to {
          margin-left: -40px;
        }
      }
    }
    li {
      margin-bottom: 2rem;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.primary} 50%,
        ${({ theme }) => theme.colors.secondary} 50%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 1500ms ease;

      :hover {
        background-position: 0 100%;
      }
    }
    .contactbtn {
      margin-top: 65px;
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
