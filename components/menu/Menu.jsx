import StyledMenu from './menu.style';
import { GrFormClose } from 'react-icons/gr';

const Menu = ({ setDisplayMenu }) => {
  return (
    <StyledMenu>
      <div className='closeIcon' onClick={() => setDisplayMenu(false)}>
        <GrFormClose size={30} color='#257676' />
      </div>

      <nav>
        <ul>
          <li>
            <a href='/traiteur'>✷ Traiteur</a>
          </li>

          <li>
            <a href='/cours'>✷ Cours de cuisine</a>
          </li>
          <li>
            <a href='/chef'>✷ Chef à domicile</a>
          </li>
          <li>
            <a href='/contact'>✷ Contact</a>
          </li>
          <li>
            <a href='/actus'>✷ Actus</a>
          </li>
          <li>
            <a href='/'>✷ Accueil</a>
          </li>
        </ul>
      </nav>
    </StyledMenu>
  );
};
export default Menu;
