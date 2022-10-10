import StyledHero from './hero.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Menu from '../menu/menu';
import Image from 'next/image';
import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = ({ bgPath, logoPath, title, text }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <ParallaxBanner
      className='parallax'
      layers={[
        {
          image: bgPath,
          speed: -30,
          opacity: [0.9, 1],
        },
      ]}>
      <StyledHero bg={{ path: bgPath }}>
        <div className='logo'>
          <Image
            src={logoPath}
            height={400}
            width={400}
            alt="logo de l'entreprise traiteur la table de la Bruyère Valenciennes"
          />
        </div>
        <div>
          <h1>{title}</h1>
        </div>
        <div className='text'>
          <p>{text}</p>
        </div>
        <div className='menuIcon' onClick={() => setDisplayMenu(!displayMenu)}>
          <GiHamburgerMenu size={30} color={'#fbf3e0'} />
        </div>
        {displayMenu && <Menu setDisplayMenu={setDisplayMenu} />}
      </StyledHero>
    </ParallaxBanner>
  );
};
export default Hero;
