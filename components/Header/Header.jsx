import StyledHeader from './header.style';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div className='title' onClick={() => router.push('/')}>
        <Image src={'/assets/logo.webp'} height={30} width={30} />
      </div>
      <div className='buttons'>
        <nav>
          <button onClick={() => router.push('/contact')}>✷ Contact</button>
          <button onClick={() => router.push('/tariteur')}>✷ Traiteur</button>
          <button onClick={() => router.push('/cours')}>
            ✷ Cours de cuisine
          </button>
          <button onClick={() => router.push('/chef')}>
            ✷ Chef à domicile
          </button>
          <button onClick={() => router.push('/actus')}>✷ Actus</button>
        </nav>
      </div>
      <div className='burger'></div>
    </StyledHeader>
  );
};
export default Header;
