import styled from 'styled-components';
const StyledGalery = styled.section`
  .grid {
    @media (max-width: 1045px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
    width: 100%;
    margin: 0 auto;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-top: 20px;
    padding-bottom: 20px;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    div {
      height: 500;
      width: 500;
      @media (min-width: 600px) {
        cursor: pointer;
        :hover {
          opacity: 0.9;
        }
      }
    }
  }
  .closeButton {
    @media (max-width: 750px) {
      top: 5px;
    }
    background: none;
    position: relative;
    border: none;
    left: 80vw;
    padding: 5px;
    border-radius: 5px;
    color: #ffff;
    margin-bottom: 5px;
    cursor: pointer;
    img {
      filter: invert(100%) sepia(5%) saturate(7481%) hue-rotate(283deg)
        brightness(124%) contrast(105%);
    }
  }

  .carousel {
    background-color: black;
    width: 100vw;
  }
`;
export default StyledGalery;
