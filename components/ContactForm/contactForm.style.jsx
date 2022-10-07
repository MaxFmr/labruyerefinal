import styled from 'styled-components';
const StyledContactForm = styled.section`
  font-family: 'Abhaya Libre';
  h2,
  h3 {
    font-weight: lighter;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  .form {
    padding: 15px;
    @media (min-width: 768px) {
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
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    width: 50%;
    position: relative;

    @media (max-width: 768px) {
      display: none;
    }
  }
  .rgpd {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: smaller;
    text-align: justify;
    input {
      margin: inherit;
      height: 20px;
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export default StyledContactForm;
