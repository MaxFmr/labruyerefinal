import ArticlePreview from '../components/ArticlePreview/ArticePreview';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { findPosts } from './api/article';

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
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Adipisci, minima quasi?
    !'
      />
      {articles.map((art, index) => {
        return (
          <div key={index} onClick={() => router.push(`/article/${art.title}`)}>
            <ArticlePreview article={art} />
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const posts = await findPosts();
  const articles = JSON.stringify(posts);
  return { props: { posts: articles } };
}

export default ActusPage;
