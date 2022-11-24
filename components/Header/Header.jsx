import StyledHeader from './header.style';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretLeft } from 'react-icons/ai';
const Header = () => {
  const router = useRouter();
  const [displayServices, setDisplayServices] = useState(false);
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
          <button onClick={() => setDisplayServices(!displayServices)}>
            ❃ Nos services
          </button>
          {!displayServices ? (
            <AiFillCaretLeft size={20} style={{ paddingTop: '7px' }} />
          ) : (
            <AiFillCaretDown size={20} style={{ paddingTop: '7px' }} />
          )}

          {displayServices && (
            <div className='services'>
              <button onClick={() => router.push('/traiteur')}>
                ❃ Traiteur
              </button>

              <button onClick={() => router.push('/cours')}>
                ❃ École de la table
              </button>
              <button onClick={() => router.push('/chef')}>
                ❃ Chef à domicile
              </button>
            </div>
          )}

          <button onClick={() => router.push('/contact')}> ❃ Contact</button>

          <button onClick={() => router.push('/tarifs')}>
            ❃ Brochure & Tarifs
          </button>
          <button onClick={() => router.push('/actus')}>
            {' '}
            ❃ Fêtes de fin d’année
          </button>
          <button onClick={() => router.push('/galery')}> ❃ Galerie</button>
        </nav>
      </div>
      <div className='burger'></div>
    </StyledHeader>
  );
};
export default Header;
