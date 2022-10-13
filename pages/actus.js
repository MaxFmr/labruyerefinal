import ArticlePreview from '../components/ArticlePreview/ArticePreview';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { findPosts } from './api/article';
import PostsPreview from '../components/PostsPreview/PostsPreview';

const ActusPage = ({ posts }) => {
  const router = useRouter();
  const articles = JSON.parse(posts);
  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Nos actualités'}
        text='Nos activités, nos conseils pour vous
    !'
      />
      <PostsPreview articles={articles} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await findPosts();
  const articles = JSON.stringify(posts);
  return { props: { posts: articles } };
}

export default ActusPage;
