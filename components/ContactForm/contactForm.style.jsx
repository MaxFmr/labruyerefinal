import styled from 'styled-components';
const StyledContactForm = styled.section`
  margin-top: ${(props) =>
    props.path === '/' || props.path === '/contact' || props.path === '/galery'
      ? '0'
      : '10%'};
  font-family: 'Abhaya Libre';
  h2,
  h3 {
    font-weight: lighter;
  }
  background: rgb(37, 118, 118);
  background: linear-gradient(
    90deg,
    rgba(37, 118, 118, 1) 0%,
    rgba(37, 118, 118, 1) 52%,
    rgba(37, 118, 118, 0.774969362745098) 100%
  );

  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
  }

  .form {
    padding: 15px;
    @media (min-width: 767px) {
      width: 50%;
    }
    select {
      border: none;
      border-bottom: solid ${({ theme }) => theme.colors.secondary} 1px;
      padding: 5px;
      background-color: ${({ theme }) => theme.colors.green};
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.secondary};
    }
    a {
      text-decoration: underline;
      color: #fbf3e0;
    }
  }
  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: solid ${({ theme }) => theme.colors.secondary} 1px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.green};
    margin-bottom: 5px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
    }
    color: wheat;
  }
  textarea {
    width: 100%;
    height: 200px;
    border: solid ${({ theme }) => theme.colors.secondary} 1px;
    border-radius: 5px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.green};
    margin-bottom: 5px;
    border: none;
    border-bottom: solid ${({ theme }) => theme.colors.secondary} 1px;
    ::placeholder {
      font-family: 'Familjen Grotesk', sans-serif;

      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .btn {
    display: flex;
    button {
      cursor: pointer;
      border: none;
      border-bottom: solid ${({ theme }) => theme.colors.secondary} 1px;
      width: 30%;
      margin: 0 auto;
      padding: 5px;
      background-color: ${({ theme }) => theme.colors.green};
      margin-bottom: 5px;
      margin-top: 10px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 50%;
    position: relative;

    @media (max-width: 768px) {
      display: none;
    }
  }
  .rgpd {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    font-size: smaller;
    text-align: justify;
    input {
      margin: inherit;
      height: 30px;
    }
    a {
      text-decoration: underline;
    }
  }
`;
export default StyledContactForm;
