import styled from 'styled-components';
const StyledModale = styled.section`
  opacity: 0.95;
  height: 35vh;
  position: fixed;
  top: 50%;
  left: 50%; /* à 50%/50% du parent référent */
  transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */
  background-color: #fbf3e0;
  width: 70vw;
  margin: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  color: #2d8e8e;
  z-index: 20;
  .closeIcon {
    margin-left: 77%;
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: larger;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    text-align: center;
  }
`;
export default StyledModale;
