import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Menu1 from '../menu1/Menu1';
import Image from 'next/image';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import StyledHeroVideo from './herovideo.style';

const HeroVideo = ({ title, bgPath, text, logoPath }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <ParallaxBanner
      className='parallax'
      layers={[
        {
          children: (
            <video
              src={bgPath}
              playsInline
              muted
              loop
              autoPlay
              style={{
                height: '100%',
                objectFit: 'cover',
                width: '100vw',
                position: 'absolute',
                background: 'none',
              }}></video>
          ),

          speed: -45,
        },
      ]}>
      <StyledHeroVideo>
        <div className='logo'>
          <Image
            src={logoPath}
            height={400}
            width={400}
            alt="logo de l'entreprise traiteur la table de la Bruyère Valenciennes"
          />
        </div>
        <div className='text'>
          <h1>{title}</h1>
          <span>{text}</span>
        </div>
        <div className='menuIcon' onClick={() => setDisplayMenu(!displayMenu)}>
          <GiHamburgerMenu size={40} color={'#2F4858'} />
        </div>
        {displayMenu && <Menu1 setDisplayMenu={setDisplayMenu} />}
      </StyledHeroVideo>
    </ParallaxBanner>
  );
};
export default HeroVideo;
