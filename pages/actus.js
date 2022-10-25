import ArticlePreview from '../components/ArticlePreview/ArticePreview';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { findPosts } from './api/article';
import PostsPreview from '../components/PostsPreview/PostsPreview';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

const ActusPage = ({ posts }) => {
  const router = useRouter();
  const articles = JSON.parse(posts);
  return (
    <>
      <Head>
        <title>La Table de la Bruyère - Blog, Actualités</title>

        <meta
          name='description'
          content='La table de la Bruyère traiteur partage son actualité, ses savoirs, ses conseils. Retrouvez ici les artcles de notre blog. Faites appel à un traiteur d’exception, La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, évenements, mariages, baptèmes, séminaires etc., cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/actus'
        />

        <meta property='og:video' content='' />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/actus'
        />
        <meta property='video' content='' />
        <meta property='video' content='' />
        <meta property='video' content='' />
      </Head>
      <Header />
      <Hero
        bgPath={'/assets/photos/actus/1.jpg'}
        logoPath={'/assets/logo.svg'}
        title={'Nos actualités'}
        text='Nos activités, nos conseils pour vous
    !'
      />
      <PostsPreview articles={articles} />
      <ContactForm />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const posts = await findPosts();
  const articles = JSON.stringify(posts);
  return { props: { posts: articles } };
}

export default ActusPage;
