import StyledParallaxBanner from './parallaxBanner.style';
import Image from 'next/image';
import { ParallaxBanner } from 'react-scroll-parallax';

const ParalaxBanner = () => {
  return (
    <ParallaxBanner
      className='parallax'
      layers={[
        {
          image: '/assets/photos/macro.jpg',
          speed: -10,
          opacity: [0.9, 1],
        },
      ]}>
      <div className='photo'></div>
      <StyledParallaxBanner>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet Pariatur soluta quam quia eaque et omnis
            non delectus ...
          </p>
        </div>
      </StyledParallaxBanner>
    </ParallaxBanner>
  );
};
export default ParalaxBanner;
