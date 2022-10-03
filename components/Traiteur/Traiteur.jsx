import StyledTraiteur from './traiteur.style';
import Image from 'next/image';
import Service from '../Service/Service';

const Traiteur = () => {
  return (
    <StyledTraiteur>
      <div className='hero'></div>
      <Service
        photoPath={'/assets/photos/service.webp'}
        title={'Vos évenements'}
        ImageSide='left'
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Adipisci, minima quasi?
   !'
      />
      <Service
        photoPath={'/assets/photos/service.webp'}
        title={'Vos évenements'}
        ImageSide=''
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet con'
      />
      <Service
        photoPath={'/assets/photos/service.webp'}
        title={'Vos évenements'}
        ImageSide='left'
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Adipisci, minima quasi?
        Maiores modi blanditii'
      />
    </StyledTraiteur>
  );
};
export default Traiteur;
