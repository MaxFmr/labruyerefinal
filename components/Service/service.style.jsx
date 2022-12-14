import styled from 'styled-components';

const StyledService = styled.section`
  display: flex;
  height: 35vh;
  align-items: center;
  justify-content: center;

  margin: 15% 2% 15% 2%;
  @media (max-width: 400px) {
    margin-bottom: -20px;
  }
  @media (min-width: 1000px) {
    font-size: 25px;
    height: 40vh;
  }

  .photo {
    /* box-shadow: -11px -5px 15px -5px #7fcdfd; */
    overflow: hidden;
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url(${(props) => props.bg.path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative; */
    @media (min-width: 1000px) {
      margin-left: 10%;
      height: 120%;
      width: 60%;
    }
  }

  .text {
    border-radius: 5px;
    margin: 5%;
    overflow: hidden;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: ${(props) => props.bg.textColor};
    text-align: justify;

    background-color: ${(props) => props.bg.color};
    @media (max-width: 376px) {
      font-size: 13px;
    }
    @media (min-width: 1000px) {
      font-size: 25px;
      width: 60%;
      margin-left: 15px;
    }
    @media (min-width: 768px) {
      font-size: 20px;
      padding: 2%;
    }
    .title {
      font-size: 21px;
      font-weight: bold;
      text-align: center;
    }
  }
  .link {
    a {
      text-decoration: none;
      color: #257676;
    }
  }
  .link2 {
    a {
      text-decoration: none;
      color: #fbf3e0;
    }
  }
`;
export default StyledService;
