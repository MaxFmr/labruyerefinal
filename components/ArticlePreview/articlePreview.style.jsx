import styled from 'styled-components';
const StyledArticlePreview = styled.section`
  cursor: pointer;
  height: 200px;
  width: 80vw;
  border-radius: 15px;
  color: #fbf3e0;
  margin-top: 5vh;
  background-image: url(${(props) => props.bgPath});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    border: solid;
    padding: 0 10px;
    background-color: #257676;
    border-radius: 5px;
  }
  :hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    width: 60vw;
    margin-top: 10vh;
    height: 300px;
    h2 {
      font-size: 30px;
    }
  }

  .date {
    h2 {
      margin-top: 20px;
    }
  }
`;
export default StyledArticlePreview;
