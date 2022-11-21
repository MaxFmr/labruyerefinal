import StyledHeader from './header.style';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div className='title' onClick={() => router.push('/')}>
        <Image
          src={'/assets/logo.webp'}
          height={50}
          width={50}
          alt="logo de l'entreprise traiteur la table de la Bruyère Valenciennes"
        />
      </div>
      <div className='buttons'>
        <nav>
          <button onClick={() => router.push('/contact')}> ❃ Contact</button>
          <button onClick={() => router.push('/traiteur')}> ❃ Traiteur</button>
          <button onClick={() => router.push('/cours')}>
            ❃ École de la table
          </button>
          <button onClick={() => router.push('/chef')}>
            ❃ Chef à domicile
          </button>
          <button onClick={() => router.push('/tarifs')}>
            ❃ Brochure & Tarifs
          </button>
          <button onClick={() => router.push('/actus')}>
            {' '}
            ❃ Fêtes de fin d’année
          </button>
        </nav>
      </div>
      <div className='burger'></div>
    </StyledHeader>
  );
};
export default Header;
