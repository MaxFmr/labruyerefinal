import styled from 'styled-components';
const StyledContactForm = styled.section`
  font-family: 'Familjen Grotesk', sans-serif;

  width: 100%;
  display: flex;
  flex-direction: column;
  border: solid blue 2px;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  .form {
    border: solid;
    padding: 15px;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  input {
    width: 100%;
    height: 40px;
    border: solid ${({ theme }) => theme.colors.secondary} 1px;
    border-radius: 5px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.green};
    margin-bottom: 5px;

    ::placeholder {
      font-weight: bold;
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
    ::placeholder {
      font-family: 'Familjen Grotesk', sans-serif;

      font-weight: bold;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .btn {
    display: flex;
    button {
      width: 50%;
      margin: 0 auto;
      border: solid ${({ theme }) => theme.colors.secondary} 1px;
      border-radius: 5px;
      padding: 5px;
      background-color: ${({ theme }) => theme.colors.green};
      margin-bottom: 5px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .logo {
    background-image: url('/assets/photos/service.webp');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 800px;
    overflow: hidden;
    width: 50%;
    position: relative;
    border: solid green 2px;

    @media (max-width: 768px) {
      display: none;
    }
  }
  .rgpd {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: smaller;
    text-align: justify;
  }
`;
export default StyledContactForm;
