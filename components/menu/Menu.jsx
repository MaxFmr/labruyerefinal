import StyledMenu from './menu.style';
import { GrFormClose } from 'react-icons/gr';
import Link from 'next/link';

const Menu = ({ setDisplayMenu }) => {
  return (
    <StyledMenu>
      <div className='closeIcon' onClick={() => setDisplayMenu(false)}>
        <GrFormClose size={30} color='#257676' />
      </div>

      <nav>
        <ul>
          <li>
            <Link href={'/traiteur'}> ✷ Traiteur</Link>
          </li>

          <li>
            <Link href='/cours'>✷ Cours de cuisine</Link>
          </li>
          <li>
            <Link href='/chef'>✷ Chef à domicile</Link>
          </li>
          <li>
            <Link href='/contact'>✷ Contact</Link>
          </li>
          <li>
            <Link href='/actus'>✷ Actus</Link>
          </li>
          <li>
            <Link href='/'>✷ Accueil</Link>
          </li>
        </ul>
      </nav>
    </StyledMenu>
  );
};
export default Menu;
