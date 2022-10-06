import StyledService from './service.style';

const Service = ({ photoPath, title, text, ImageSide, bgColor, textColor }) => {
  return (
    <StyledService
      bg={{ path: photoPath, color: bgColor, textColor: textColor }}>
      {ImageSide === 'left' ? (
        <>
          <div className='photo'></div>
          <div className='text'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='text'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className='photo'></div>
        </>
      )}
    </StyledService>
  );
};
export default Service;
