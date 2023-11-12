import 'react-image-gallery/styles/css/image-gallery.css';
import { useState } from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import StyledBrochure from './brochure.style';
import Link from 'next/link';

const Brochure = ({}) => {
  const [clicked, setClicked] = useState(false);
  const [imgId, setImgId] = useState();
  const photos = [];

  let photosGallery = [];

  for (let index = 1; index < 16; index++) {
    photosGallery.push({
      original: `/assets/photos/tarifs/_${index}.jpg`,
      thumbnail: `/assets/photos/tarifs/_${index}.jpg`,
    });
  }
  for (let index = 1; index < 16; index++) {
    photos.push({
      id: index,
      url: `/assets/photos/tarifs/_${index}.jpg`,
      alt: `Brochure tarifaire la Table de la Bruyère page n°${index}`,
    });
  }

  return (
    <StyledBrochure>
      <div
        className='link'
        style={{
          fontSize: '30px',
          border: 'solid 0.5px',
          padding: '2%',
          borderRadius: '5px',
        }}>
        <Link href={'/article/Notre%20menu%20pour%20les%20fêtes%20en%202023'}>
          <a>
            Consultez notre menu pour les <strong>fêtes 2023/2024</strong>
          </a>
        </Link>
      </div>

      <div className='link' style={{ marginTop: '20px' }}>
        <Link href={'https://www.maximekerlidou.fr/pdf/menufetes_2023.pdf'}>
          <a target='_blank'>Version PDF</a>
        </Link>
      </div>

      <div style={{ height: '40px' }}></div>
      <h2>Notre carte à l’année : </h2>

      <ImageGallery
        items={photosGallery}
        showThumbnails={false}
        startIndex={imgId}
      />

      <div className='link'>
        <Link href={'https://www.maximekerlidou.fr/pdf/tarifs.pdf'}>
          <a target='_blank'>Consulter notre brochure au format PDF</a>
        </Link>
        <p>
          Les <strong>cours de cuisine</strong> sont organisés le lundi
          après-midi, toutes les deux semaines de 13H00 à 15H30. Le tarif est de
          80€ par personne. Nos cours sont prévus pour des groupes comprenant
          jusque
          <strong> 8 personnes.</strong>
        </p>
      </div>
    </StyledBrochure>
  );
};

export default Brochure;
