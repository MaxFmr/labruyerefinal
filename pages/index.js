import Head from 'next/head';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import StyledHomePage from '../styles/homePage.style';

export default function Home() {
  return (
    <StyledHomePage>
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

      <div className='logo'>
        <Image src='/assets/logo.webp' layout='fill' objectFit='cover' />
      </div>

      <div className='items'>
        <h1>LA TABLE DE LA BRUYERE</h1>
        <nav>
          <ul>
            <li>
              <a href='/'>Traiteur</a>
            </li>
            <li>
              <a href='/'>Cours de cuisine</a>
            </li>
            <li>
              <a href='/'>Chef à domicile</a>
            </li>
          </ul>
        </nav>
        <div className='contactbtn'>
          <a href='/'>CONTACTEZ - NOUS</a>
        </div>
        <div className='social'>
          <FaInstagram size={35} />
          <FaFacebook size={35} />
        </div>
      </div>
    </StyledHomePage>
  );
}
