import { findPosts } from '../api/article';
import { findOneArticle } from '../api/article/[title]';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import Hero from '../../components/Hero/Hero';
import Head from 'next/head';
import Footer from '../../components/footer/Footer';

const articlePage = ({ post }) => {
  const article = JSON.parse(post);

  return (
    <>
      <Head>
        <title>{article.postTitle}</title>
        <meta name='description' content={article.text1} />
        <meta
          property='og:url'
          content={
            'https://www.latabledelabruyere.com/article/' + article.postTitle
          }
        />
        <meta
          property='url'
          content={
            'https://www.latabledelabruyere.com/article/' + article.postTitle
          }
        />

        <meta property='og:video' content='' />

        <meta property='video' content='' />
        <meta property='video' content='' />
        <meta property='video' content='' />
      </Head>
      <Header />
      <Hero
        bgPath={'/assets/photos/actus/1.jpg'}
        logoPath={'/assets/cloche.svg'}
        title={article.postTitle}
        text={article.date}
      />
      <Post post={article} />
      <Footer />
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

  console.log(param);

  const post = await findOneArticle(param);
  const article = JSON.stringify(post);
  return { props: { post: article } };
}

export default articlePage;
