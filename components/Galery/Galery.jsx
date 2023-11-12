import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import StyledGalery from './galery.style';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useScrollTo } from 'react-use-window-scroll';
import { useWindowSize } from 'usehooks-ts';

import { useState } from 'react';

const GaleryGrid = () => {
  const scrollTo = useScrollTo();
  const { width } = useWindowSize();

  const [clicked, setClicked] = useState(false);
  const [imgId, setImgId] = useState(undefined);

  let urlArr = [];

  for (let i = 128; i > 1; i--) {
    urlArr.push(
      `https://www.maximekerlidou.fr/photos/labruyere/galery/_${i}.webp`
    );
  }
  let photosGallery = [];

  for (let index = 128; index > 1; index--) {
    photosGallery.push({
      original: `https://www.maximekerlidou.fr/photos/labruyere/galery/_${index}.webp`,
      thumbnail: `https://www.maximekerlidou.fr/photos/labruyere/galery/_${index}.webp`,
    });
  }
  const handleClick = (id) => {
    if (width > 600) {
      scrollTo(665, 0);
      setClicked(!clicked);
      setImgId(id);
    }
  };
  return (
    <StyledGalery>
      {clicked && width > 600 ? (
        <div className='carousel'>
          <button className='closeButton' onClick={() => setClicked(false)}>
            <Image
              src='/assets/xmark-solid.svg'
              height={40}
              width={40}
              alt='closing logo'
            />
          </button>

          <ImageGallery
            items={photosGallery}
            useBrowserFullscreen={true}
            showThumbnails={false}
            startIndex={imgId}
          />
        </div>
      ) : (
        <div className='grid'>
          {urlArr.map((url, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  handleClick(index);
                }}>
                <Image
                  src={url}
                  height={700}
                  width={700}
                  alt={url}
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL={url}
                />
              </div>
            );
          })}
        </div>
      )}
    </StyledGalery>
  );
};
export default GaleryGrid;
