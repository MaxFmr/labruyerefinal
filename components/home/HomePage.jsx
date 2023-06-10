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
          playsinline
          playsInline
          src='https://www.maximekerlidou.fr/videos/bruyere.mp4'
          muted
          loop
          autoPlay
          type='video/mp4'
          autoplay
          style={{
            height: '100%',
            objectFit: 'cover',
            width: '100vw',
            position: 'absolute',
            background: 'none',
          }}></video>
        <div className='header'>
          <Image
            src={'/assets/g8.svg'}
            height={200}
            width={200}
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
              router.push('/contact');
            }}>
            Réserver
          </button>
        </div>

        <div className='social'>
          <Link
            href={
              'https://instagram.com/latabledelabruyere?igshid=YmMyMTA2M2Y='
            }>
            <div>
              <FaInstagram
                size={50}
                color='#fbf3e0'
                style={{ cursor: 'pointer', marginBottom: '10px' }}
              />
            </div>
          </Link>

          <Link
            href={
              'https://www.facebook.com/La-Table-De-La-Bruyere-102142975538310/'
            }>
            <div>
              <FaFacebook
                size={50}
                color='#fbf3e0'
                style={{ cursor: 'pointer' }}
              />
            </div>
          </Link>
        </div>
        <div className='scroll'>
          <AiFillDownCircle size={40} color={'#257676'} />
        </div>
        <div className='widget'>
          <script src='https://apps.elfsight.com/p/platform.js' defer></script>
          <div class='elfsight-app-95b6498d-f823-4cc4-baba-46fbb9d1960c'></div>
        </div>
      </StyledHomePage>
    </>
  );
};
export default HomePage;
