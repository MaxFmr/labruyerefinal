import StyledPost from './post.style';
import Image from 'next/image';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useScrollTo } from 'react-use-window-scroll';
import { useWindowSize } from 'usehooks-ts';
import 'react-image-gallery/styles/css/image-gallery.css';
import StyledGalery from '../Galery/galery.style';

const Post = ({ post }) => {
  const scrollTo = useScrollTo();
  const { width } = useWindowSize();
  const { postTitle, title1, text1, title2, text2, title3, text3, photos } =
    post;
  let photosGallery = [];

  for (let index = 0; index < photos.length; index++) {
    photosGallery.push({
      original: photos[index],
      thumbnail: photos[index],
    });
  }
  const [clicked, setClicked] = useState(false);
  const [imgId, setImgId] = useState(undefined);

  const handleClick = (id) => {
    if (width > 600) {
      scrollTo(665, 0);
      setClicked(!clicked);
      setImgId(id);
    }
  };

  return clicked && width > 600 ? (
    <StyledGalery>
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
    </StyledGalery>
  ) : (
    <StyledPost>
      <h1>{postTitle}</h1>
      <h2>{title1}</h2>
      <p>{text1}</p>

      <div className='photo' onClick={() => handleClick(0)}>
        <Image
          src={photos[0]}
          height={1000}
          width={1500}
          objectFit='contain'
          alt={postTitle + title1}
          blurDataURL={photos[0]}
        />
      </div>
      {title2 && (
        <>
          <h2>{title2}</h2>
          <p>{text2}</p>
        </>
      )}
      {photos[1] && (
        <div className='photo' onClick={() => handleClick(1)}>
          <Image
            src={photos[1]}
            height={1000}
            width={1500}
            objectFit='contain'
            alt={postTitle + title2}
            blurDataURL={photos[1]}
          />
        </div>
      )}
      {title3 && (
        <>
          <h2>{title3}</h2>
          <p>{text3}</p>
        </>
      )}

      {photos[2] && (
        <div className='photo' onClick={() => handleClick(2)}>
          <Image
            src={photos[2]}
            height={1000}
            width={700}
            objectFit='cover'
            alt={postTitle + title3}
            blurDataURL={photos[2]}
          />
        </div>
      )}
    </StyledPost>
  );
};
export default Post;
