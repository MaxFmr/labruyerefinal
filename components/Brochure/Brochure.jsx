import 'react-image-gallery/styles/css/image-gallery.css';
import { useState } from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import StyledBrochure from './brochure.style';
import Link from 'next/link';

const Brochure = () => {
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
  const handleClick = (id) => {
    setClicked(!clicked);
    setImgId(id);
  };
  return (
    <StyledBrochure>
      <ImageGallery
        items={photosGallery}
        showThumbnails={false}
        startIndex={imgId}
      />
      <div className='link'>
        <Link href={'https://www.maximekerlidou.fr/pdf/tarifs.pdf'}>
          <a target='_blank'>Consulter notre brochure au format PDF</a>
        </Link>
      </div>
    </StyledBrochure>
  );
};
export default Brochure;
