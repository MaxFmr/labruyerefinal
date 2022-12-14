import styled from 'styled-components';
const StyledReveil = styled.section`
  a {
    color: #257676;
    text-decoration: none;
  }
  .cta {
    border: #257676 solid 1px;
    width: 225px;
    border-radius: 5px;
    margin-left: calc(50% - 112.5px);
    margin-top: 30px;
    font-size: larger;
    cursor: pointer;
    :focus {
      color: #2d8e8e;
      opacity: 0.7;
      border: black solid 1px;
    }
    &:hover {
      color: #2d8e8e;
      opacity: 0.7;
      border: black solid 1px;
    }
  }
`;
export default StyledReveil;
