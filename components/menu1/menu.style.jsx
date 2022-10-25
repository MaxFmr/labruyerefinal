import styled from 'styled-components';
const StyledMenu = styled.section`
  opacity: 0.97;
  height: 50vh;
  position: fixed;
  line-height: 25px;
  left: 0.1px;
  background-color: #fbf3e0;
  width: 70vw;
  @media (min-width: 700px) {
    width: 40vw;
  }
  @media (min-width: 1300px) {
    width: 30vw;
  }
  margin: 2%;
  top: 2%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  z-index: 100;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    font-size: 40px;
    cursor: pointer;
    @media (max-width: 400px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
  li {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 7%;
  }
  ul {
    list-style-type: none;
  }
  .closeIcon {
    position: absolute;
    top: 7%;
    left: 65%;
    color: #257676;
    font-weight: bold;
  }
`;
export default StyledMenu;
