import { findPosts } from '../api/article';
import { findOneArticle } from '../api/article/[title]';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import Hero from '../../components/Hero/Hero';

const articlePage = ({ post }) => {
  const article = JSON.parse(post);

  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={article.postTitle}
        text={article.date}
      />
      <Post post={article} />
    </>
  );
};
export async function getStaticPaths() {
  const posts = await findPosts();

  const paths = posts.map((post) => ({
    params: { title: post.postTitle },
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
