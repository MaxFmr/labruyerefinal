import StyledHomePage from './homePage.style';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header/Header';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu1 from '../menu1/Menu1';
import { useRouter } from 'next/router';
import { useState } from 'react';

const HomePage = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <StyledHomePage>
        <video
          playsInline
          src='https://www.maximekerlidou.fr/videos/videobanner.mp4'
          muted
          loop
          autoPlay
          style={{
            height: '100%',
            objectFit: 'cover',
            width: '100vw',
            position: 'absolute',
          }}></video>
        <div className='header'>
          <Image src={'/assets/logo.svg'} height={90} width={80} />
        </div>
        <div className='items'>
          <h1>
            <Link href={'/traiteur'}>Traiteur </Link>
          </h1>
          <h2>
            <Link href={'/chef'}>Chef à Domicile </Link>
          </h2>
          <h2>
            <Link href={'/cours'}>Cours de cuisine </Link>
          </h2>
          <button
            onClick={() => {
              router.push('/traiteur#form');
            }}>
            Reserver
          </button>
        </div>
        <div className='social'>
          <Link
            href={
              'https://instagram.com/latabledelabruyere?igshid=YmMyMTA2M2Y='
            }>
            <FaInstagram
              size={50}
              color='#2d8e8e'
              style={{ cursor: 'pointer', marginBottom: '10px' }}
            />
          </Link>

          <Link
            href={
              'https://www.facebook.com/La-Table-De-La-Bruyere-102142975538310/'
            }>
            <FaFacebook
              size={50}
              color='#257676'
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </div>
      </StyledHomePage>
    </>
  );
};
export default HomePage;
