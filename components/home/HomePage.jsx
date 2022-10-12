import StyledHomePage from './homePage.style';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const HomePage = () => {
  return (
    <StyledHomePage>
      <div></div>
      <video
        playsInline
        src='https://ak.picdn.net/shutterstock/videos/1061926687/preview/stock-footage-close-up-professional-chef-at-restaurant-kitchen-serves-dish-adding-final-ingredient-by-hand.webm'
        muted
        loop
        autoPlay
        style={{
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        }}></video>

      <div className='items'>
        <div className='logo'>
          <Image
            src='/assets/logo.svg'
            height={180}
            width={200}
            objectFit='cover'
            alt='logo entreprise traiteur la table de la bruyère'
          />
        </div>
        <div className='nav'>
          <nav>
            <ul>
              <Link href={'/traiteur'}>
                <li>Traiteur</li>
              </Link>
              <Link href='/cours'>
                <li>Cours de cuisine</li>
              </Link>

              <Link href='/chef'>
                <li> Chef à domicile</li>
              </Link>

              <Link href='/actus'>
                <li> Nos actualités</li>
              </Link>
            </ul>
            <div className='contactbtn'>
              <Link href={'/contact'}>
                <span> CONTACTEZ - NOUS</span>
              </Link>
            </div>
          </nav>

          <div className='social'>
            <Link href=''>
              <FaInstagram size={35} style={{ cursor: 'pointer' }} />
            </Link>

            <Link href=''>
              <FaFacebook size={35} style={{ cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};
export default HomePage;
