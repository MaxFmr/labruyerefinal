import StyledHomePage from './homePage.style';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiFillDownCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <StyledHomePage>
        <video
          playsInline
          src='https://www.maximekerlidou.fr/videos/bruyere.mp4'
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
          <Image
            src={'/assets/logo.svg'}
            height={200}
            width={300}
            alt='logo entreprise traiteur, chef à domicile, école cours de cuisine La tabel de la bruyère valenciennes'
          />
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
            <div>
              {' '}
              <FaInstagram
                size={50}
                color='#2d8e8e'
                style={{ cursor: 'pointer', marginBottom: '10px' }}
              />
            </div>
          </Link>

          <Link
            href={
              'https://www.facebook.com/La-Table-De-La-Bruyere-102142975538310/'
            }>
            <div>
              {' '}
              <FaFacebook
                size={50}
                color='#257676'
                style={{ cursor: 'pointer' }}
              />
            </div>
          </Link>
        </div>
        <div className='scroll'>
          <AiFillDownCircle size={40} color={'#257676'} />{' '}
        </div>
      </StyledHomePage>
    </>
  );
};
export default HomePage;
