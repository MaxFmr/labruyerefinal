import StyledPostsPreview from './postsPreview.style';
import ArticlePreview from '../ArticlePreview/ArticePreview';
import { useRouter } from 'next/router';

const PostsPreview = ({ articles }) => {
  const router = useRouter();

  return (
    <StyledPostsPreview>
      {articles
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((art, index) => {
          return (
            <div
              key={index}
              onClick={() => router.push(`/article/${art.postTitle}`)}>
              <ArticlePreview article={art} />
              <span>{art.date}</span>
            </div>
          );
        })}
    </StyledPostsPreview>
  );
};

export default PostsPreview;
