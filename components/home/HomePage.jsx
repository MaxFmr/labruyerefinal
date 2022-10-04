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
            height={220}
            width={300}
            objectFit='cover'
          />
        </div>
        <div className='nav'>
          <nav>
            <ul>
              <li>
                <a href='/traiteur'>Traiteur </a>
              </li>
              <li>
                <a href='/cours'>Cours de cuisine</a>
              </li>
              <li>
                <a href='/chef'>Chef à domicile</a>
              </li>
            </ul>
            <div className='contactbtn'>
              <a href='/contact'>CONTACTEZ - NOUS</a>
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
