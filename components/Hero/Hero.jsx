import StyledHero from './hero.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Menu from '../menu/menu';
import Image from 'next/image';

const Hero = ({ bgPath, logoPath, title, text }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <StyledHero bg={{ path: bgPath }}>
      <div className='logo'>
        <Image src={logoPath} height={400} width={400} />
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
  );
};
export default Hero;
