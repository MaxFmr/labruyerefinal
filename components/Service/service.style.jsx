import styled from 'styled-components';

const StyledService = styled.section`
  border: solid 2px red;
  display: flex;
  height: 50vh;
  align-items: center;
  .photo {
    height: 100%;
    width: 50%;
    border: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.bg.path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .text {
    border: solid pink 2px;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5%;
    font-size: smaller;
    color: ${(props) => props.bg.textColor};

    background-color: ${(props) => props.bg.color};
  }
`;
export default StyledService;
