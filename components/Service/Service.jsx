import StyledService from './service.style';
import Image from 'next/image';

const Service = ({ photoPath, title, text, ImageSide, bgColor }) => {
  return (
    <StyledService bgColor={{ color: bgColor, bg: photoPath }}>
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
          <div className='photo'>
            <Image
              src={photoPath}
              height={300}
              width={300}
              objectFit='cover'
              layout='responsive'
            />
          </div>
        </>
      )}
    </StyledService>
  );
};
export default Service;
