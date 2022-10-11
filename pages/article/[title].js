import axios from 'axios';
import { findPosts } from '../api/article';
import { findOneArticle } from '../api/article/[title]';

const articlePage = ({ post }) => {
  const article = JSON.parse(post);

  return (
    <div>
      <p style={{ color: 'black' }}> {article.title}</p>
    </div>
  );
};
export async function getStaticPaths() {
  const posts = await findPosts();

  const paths = posts.map((post) => ({
    params: { title: post.title },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const param = params.title;

  const post = await findOneArticle(param);
  const article = JSON.stringify(post);
  return { props: { post: article } };
}

export default articlePage;
