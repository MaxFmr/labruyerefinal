import StyledHomePage from './homePage.style';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const HomePage = () => {
  return (
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
          width: '100%',
        }}></video>

      <div className='items'>
        <div className='logo'>
          <Image
            src='/assets/logo.svg'
            height={180}
            width={280}
            objectFit='cover'
            alt='logo entreprise traiteur la table de la bruyère'
          />
        </div>
        <div className='nav'>
          <nav>
            <ul>
              <Link href={'/traiteur'}>
                <li> ❃ Traiteur</li>
              </Link>
              <Link href='/cours'>
                <li> ❃ Cours de cuisine</li>
              </Link>

              <Link href='/chef'>
                <li> ❃ Chef à domicile</li>
              </Link>

              <Link href='/actus'>
                <li> ❃ Nos actualités</li>
              </Link>
            </ul>
            <div className='contactbtn'>
              <Link href={'/contact'}>
                <span> CONTACTEZ - NOUS</span>
              </Link>
            </div>
          </nav>

          <div className='social'>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://instagram.com/latabledelabruyere?igshid=YmMyMTA2M2Y='>
              <FaInstagram size={35} style={{ cursor: 'pointer' }} />
            </Link>

            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/La-Table-De-La-Bruyere-102142975538310/'>
              <FaFacebook size={35} style={{ cursor: 'pointer' }} />
            </Link>
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};
export default HomePage;
