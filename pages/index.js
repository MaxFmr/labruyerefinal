import HomePage from '../components/home/HomePage';

import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Table de La Bruyère</title>
        <meta
          name='google-site-verification'
          content='YvTIft4XGDXwZTAbiex5wwvb7V5t3fA9V3bL5VIOF10'
        />
        <meta
          name='description'
          content='Faites appel à un traiteur d’exception, La Table de La Bruyère, Traiteur évenementiel, chef à domicile, évenements, mariages, baptèmes, séminaires etc., cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois '
        />
        <meta property='og:url' content='https://www.latabledelabruyere.com' />

        <meta property='og:video' content='' />

        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta property='video' content='' />
        <meta property='video' content='' />
        <meta property='video' content='' />
      </Head>
      <HomePage />

      <div id='form'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
