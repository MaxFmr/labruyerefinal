import StyledMenu from './menu.style';
import Link from 'next/link';

const Menu1 = ({ setDisplayMenu }) => {
  return (
    <StyledMenu>
      <div className='closeIcon' onClick={() => setDisplayMenu(false)}>
        <span>FERMER</span>
      </div>

      <nav>
        <ul>
          <li>
            <Link href={'/traiteur'}> ❃ Traiteur</Link>
          </li>

          <li>
            <Link href='/cours'> ❃ Cours de cuisine</Link>
          </li>
          <li>
            <Link href='/chef'> ❃ Chef à domicile</Link>
          </li>
          <li>
            <Link href='/contact'> ❃ Contact</Link>
          </li>
          <li>
            <Link href='/tarifs'> ❃ Brochure & Tarifs</Link>
          </li>
          <li>
            <Link href='/actus'> ❃ Fêtes de fin d’année</Link>
          </li>
          <li>
            <Link href='/galery'> ❃ Galerie</Link>
          </li>
          <li>
            <Link href='/'> ❃ Accueil</Link>
          </li>
        </ul>
      </nav>
    </StyledMenu>
  );
};
export default Menu1;
