import StyledHero from './hero.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Menu1 from '../menu1/Menu1';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = ({ bgPath, logoPath, title, text }) => {
  const router = useRouter();
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <ParallaxBanner
      className='parallax'
      layers={[
        {
          image: bgPath,
          speed: -20,
          opacity: [0.73, 0.73],
        },
      ]}>
      <StyledHero bg={{ path: bgPath }}>
        {router.asPath !== '/chef' && (
          <div className='logo'>
            <Image
              src={logoPath}
              height={200}
              width={200}
              alt="logo de l'entreprise traiteur la table de la Bruyère Valenciennes"
            />
          </div>
        )}
        <div className='text'>
          <h1>{title}</h1>
          <span>{text}</span>
        </div>
        <div className='menuIcon' onClick={() => setDisplayMenu(!displayMenu)}>
          <GiHamburgerMenu size={40} color={'#2F4858'} />
        </div>
        {displayMenu && <Menu1 setDisplayMenu={setDisplayMenu} />}
      </StyledHero>
    </ParallaxBanner>
  );
};
export default Hero;
