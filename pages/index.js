import HomePage from '../components/home/HomePage';

import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name='google-site-verification'
          content='eTvl94KTN6CVkVMX_dD6hOqWSQLv_dNencmVmWoB4O4'
        />
        <title>La Table de La Bruyère - Traiteur</title>
        <meta
          property='og:image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />

        <meta
          name='description'
          content='Faites appel à un traiteur d’exception, pour un évènement inoubliable. La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, cours de cuisine, mariages, baptèmes, séminaires, cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois'
        />
        <meta property='og:url' content='https://www.latabledelabruyere.com' />

        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta property='og:title' content='La Table de La Bruyère - Traiteur' />
        <meta property='og:type' content='video.movie' />

        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
      </Head>
      <HomePage />
      <ContactForm />
      <Footer />
    </>
  );
}
