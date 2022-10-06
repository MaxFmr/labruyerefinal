import StyledHero from './hero.style';
import Image from 'next/image';

const Hero = ({ bgPath, logoPath, title, text }) => {
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
    </StyledHero>
  );
};
export default Hero;
