import StyledParallaxBanner from './parallaxBanner.style';
import { ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';

const ParalaxBanner = ({ photoPath, text, logo }) => {
  return (
    <ParallaxBanner
      className='parallax'
      layers={[
        {
          image: photoPath,
          speed: -10,
          opacity: [0.7, 0.8],
        },
      ]}>
      <div className='photo'></div>
      <StyledParallaxBanner>
        {logo && (
          <div className='logo'>
            <Image src={logo} height={200} width={200} />
          </div>
        )}
        <div className='text'>
          <span>{text}</span>
        </div>
      </StyledParallaxBanner>
    </ParallaxBanner>
  );
};
export default ParalaxBanner;
