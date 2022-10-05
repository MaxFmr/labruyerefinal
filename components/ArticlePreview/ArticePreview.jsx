import StyledArticlePreview from './articlePreview.style';
import axios from 'axios';

const ArticlePreview = ({ article }) => {
  return <StyledArticlePreview>{article.title}</StyledArticlePreview>;
};

export default ArticlePreview;
