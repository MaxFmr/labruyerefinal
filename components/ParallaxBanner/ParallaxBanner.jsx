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
          speed: -5,
          opacity: [0.72, 0.72],
        },
      ]}>
      <div className='photo'></div>
      <StyledParallaxBanner>
        {logo && (
          <div className='logo'>
            <Image
              src={logo}
              height={150}
              width={150}
              alt="logo de l'entreprise le réveil de la bruyère gite salle de réception"
            />
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
