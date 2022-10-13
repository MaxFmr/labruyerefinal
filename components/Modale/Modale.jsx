import StyledModale from './madale.stye';
import Image from 'next/image';

const Modale = ({ onCloseModal }) => {
  return (
    <StyledModale>
      <div
        className='closeIcon'
        style={{ color: '#257676' }}
        onClick={() => onCloseModal()}>
        <span>FERMER</span>
      </div>
      <p>
        Vous message à été transmis à La Table de La Bruyère. Vous avez reçu un
        mail de confirmation. Nous allons vous recontacter dans les plus brefs
        délais.
      </p>
      <p>Merci pour l’attention portée à notre travail.</p>
    </StyledModale>
  );
};
export default Modale;
