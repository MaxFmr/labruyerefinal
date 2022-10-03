import StyledTraiteur from './traiteur.style';
import Image from 'next/image';
import Service from '../Service/Service';

const Traiteur = () => {
  return (
    <StyledTraiteur>
      <div className='hero'></div>
      <Service />
    </StyledTraiteur>
  );
};
export default Traiteur;
