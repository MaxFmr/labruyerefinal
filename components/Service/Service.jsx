import StyledService from './service.style';
import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link';
import Image from 'next/image';

const Service = ({
  photoPath,
  title,
  text,
  ImageSide,
  bgColor,
  textColor,
  link,
  textLink,
}) => {
  return (
    <StyledService
      bg={{
        path: photoPath,
        color: bgColor,
        textColor: textColor,
        side: ImageSide,
      }}>
      {ImageSide === 'left' ? (
        <>
          <div className='photo'>
            <Parallax speed={2} translateY={[-10, 10]}>
              <Image
                src={photoPath}
                height={800}
                width={720}
                objectFit='cover'
                alt='photo traiteur le table de la bruyère à Valenciennes'
                blurDataURL={photoPath}
              />
            </Parallax>
          </div>
          <div className='text' style={{}}>
            <span className='title'>{title}</span>
            <p>{text}</p>
            <span className='link'>
              {link && <Link href={link}>{textLink}</Link>}
            </span>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              padding: '4%',
              boxShadow: '5px 5px 6px -3px rgba(0,0,0,0.41)',
            }}
            className='text'>
            <span className='title'>{title}</span>
            <p>{text}</p>
            <span className='link2'>
              {link && <Link href={link}>{textLink}</Link>}
            </span>
          </div>
          <div className='photo'>
            <Parallax speed={-2} translateY={[-10, 10]}>
              <Image
                src={photoPath}
                blurDataURL={photoPath}
                height={800}
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
