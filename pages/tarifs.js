import Head from 'next/head';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/footer/Footer';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/Herovideo';
import 'react-image-gallery/styles/css/image-gallery.css';
import Brochure from '../components/Brochure/Brochure';

const TarifsPage = () => {
  return (
    <div>
      <Head>
        <title>La Table de La Bruyère - Tarifs</title>

        <meta
          name='description'
          content='Notre Offre, nos produits, nos tarifs, menus entrée plat dessert, Buffets etc. '
        />
        <meta property='og:url' content='https://www.latabledelabruyere.com' />

        <meta property='og:video' content='' />

        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta property='og:title' content='La Table de La Bruyère - Tarifs' />
        <meta property='og:type' content='video.movie' />
        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
      </Head>
      <Header />
      <HeroVideo
        bgPath={'https://www.maximekerlidou.fr/videos/bruyere.mp4'}
        logoPath={'/assets/cloche.svg'}
        title={'Brochure et Tarifs'}
      />
      <div style={{ height: '5vh' }}></div>
      <Brochure />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default TarifsPage;
