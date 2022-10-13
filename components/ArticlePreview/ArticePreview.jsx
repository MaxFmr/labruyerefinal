import StyledArticlePreview from './articlePreview.style';
import axios from 'axios';

const ArticlePreview = ({ article }) => {
  return (
    <StyledArticlePreview bgPath={article.photos[0]}>
      <div className='date'>
        <h2> {article.postTitle}</h2>
      </div>
    </StyledArticlePreview>
  );
};

export default ArticlePreview;
