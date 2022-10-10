import StyledService from './service.style';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

const Service = ({ photoPath, title, text, ImageSide, bgColor, textColor }) => {
  return (
    <StyledService
      bg={{ path: photoPath, color: bgColor, textColor: textColor }}>
      {ImageSide === 'left' ? (
        <>
          <div className='photo'>
            <Parallax speed={2}>
              <Image
                src={photoPath}
                height={600}
                width={720}
                objectFit='cover'
                alt='photo traiteur le table de la bruyère valenciennes'
              />
            </Parallax>
          </div>
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
            <Parallax speed={-2}>
              <Image
                src={photoPath}
                height={700}
                width={720}
                objectFit='cover'
                alt='photo traiteur le table de la bruyère valenciennes'
              />
            </Parallax>
          </div>
        </>
      )}
    </StyledService>
  );
};
export default Service;
