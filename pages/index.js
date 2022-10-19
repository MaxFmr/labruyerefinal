import HomePage from '../components/home/HomePage';

import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Table de La Bruyère - Traiteur</title>

        <meta
          name='description'
          content='Faites appel à un traiteur d’exception, La Table de La Bruyère, Traiteur évenementiel, chef à domicile, évenements, mariages, baptèmes, séminaires etc., cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois '
        />
        <meta property='og:url' content='https://www.latabledelabruyere.com' />

        <meta property='og:video' content='' />

        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta property='og:title' content='La Table de La Bruyère - Traiteur' />
        <meta property='og:type' content='video.movie' />
        <meta property='og:image' content='/assets/photos/service.webp' />
        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
      </Head>
      <HomePage />

      <div id='form'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
