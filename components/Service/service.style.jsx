import styled from 'styled-components';

const StyledService = styled.section`
  display: flex;
  height: 35vh;
  align-items: center;
  justify-content: center;
  margin: 4%;
  @media (min-width: 1000px) {
    font-size: 25px;
    height: 40vh;
  }
  .photo {
    box-shadow: -11px -5px 15px -5px #2f4858;

    height: 80%;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.bg.path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    position: relative;
    @media (min-width: 1000px) {
      margin-left: 10%;
      height: 120%;
      width: 60%;
    }
  }
  .text {
    box-shadow: -11px -5px 15px -5px #2f4858;

    overflow: hidden;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4%;
    font-size: 13px;
    color: ${(props) => props.bg.textColor};

    background-color: ${(props) => props.bg.color};
    @media (min-width: 1000px) {
      font-size: 20px;
      width: 60%;
      margin-left: 15px;
    }
    @media (min-width: 768px) {
      font-size: 18px;
      padding: 2%;
    }
  }
`;
export default StyledService;
