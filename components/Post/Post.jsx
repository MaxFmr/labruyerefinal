import StyledPost from './post.style';
import Image from 'next/image';

const Post = ({ post }) => {
  const { postTitle, title1, text1, title2, text2, title3, text3, photos } =
    post;

  return (
    <StyledPost>
      <h1>{postTitle}</h1>
      <h2>{title1}</h2>
      <p>{text1}</p>

      <div className='photo'>
        <Image
          src={photos[0]}
          height={1000}
          width={700}
          objectFit='cover'
          alt={postTitle + title1}
        />
      </div>
      {title2 && (
        <>
          <h2>{title2}</h2>
          <p>{text2}</p>
        </>
      )}
      {photos[1] && (
        <div className='photo'>
          <Image
            src={photos[1]}
            height={1000}
            width={700}
            objectFit='cover'
            alt={postTitle + title2}
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
        <div className='photo'>
          <Image
            src={photos[2]}
            height={1000}
            width={700}
            objectFit='cover'
            alt={postTitle + title3}
          />
        </div>
      )}
    </StyledPost>
  );
};
export default Post;
