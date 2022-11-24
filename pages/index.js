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
        <title>
          La Table de La Bruyère - Traiteur, Valenciennes, Hauts de France
        </title>
        <meta
          name='image'
          property='og:image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />
        <meta name='author' content='La Table de la Bruyère' />
        <meta charset='UTF-8' />

        <meta
          name='title'
          content='La Table de La Bruyère - Traiteur, Valenciennes, Hauts de France'
        />

        <meta
          property='og:title'
          content='La Table de La Bruyère - Traiteur, Valenciennes, Hauts de France
'
        />
        <meta property='og:type' content='website' />

        <meta property='og:url' content='https://www.latabledelabruyere.com' />
        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta
          property='og:image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />
        <meta
          property='image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />
        <meta
          property='og:description'
          content='Faites appel à un traiteur d’exception à Valenciennes, pour un évènement inoubliable. La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, cours de cuisine, mariages, baptèmes, séminaires, cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois'
        />
        <meta property='og:site_name' content='La Table De La Bruyère' />

        <meta content='Faites appel à un traiteur d’exception à Valenciennes, pour un évènement inoubliable. La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, cours de cuisine, mariages, baptèmes, séminaires, cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois' />

        <meta
          name='description'
          content='Faites appel à un traiteur d’exception à Valenciennes, pour un évènement inoubliable. La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, cours de cuisine, mariages, baptèmes, séminaires, cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois'
        />
        <meta
          name='twitter:description'
          content='Faites appel à un traiteur d’exception à Valenciennes, pour un évènement inoubliable. La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, cours de cuisine, mariages, baptèmes, séminaires, cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois'
        />
        <meta property='og:url' content='https://www.latabledelabruyere.com' />

        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta property='og:title' content='La Table de La Bruyère - Traiteur' />
        <meta property='og:type' content='website' />

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
