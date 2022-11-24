import Head from 'next/head';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/Herovideo';
import ContactForm from '../components/ContactForm/ContactForm';
import GaleryGrid from '../components/Galery/Galery';
const Galery = () => {
  return (
    <>
      <Head>
        <title>
          Notre Galerie Photo, la Table de la Bruyère,produits et prestations
        </title>

        <meta
          name='description'
          content='Retrouvez les photos de nos produits et de nos évenements'
        />
        <meta
          name='description'
          property='og:description'
          content='La Table de la Bruyère Valenciennes, retrouvez les photos de nos produits et de nos évenements'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/galery'
        />
        <meta
          property='og:image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />
        <meta
          property='image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />

        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
        <meta
          property='og:title'
          content='Galerie photo de la table de la Bruyère
'
        />
        <meta property='og:type' content='website' />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/contact'
        />
        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
        <meta property='video' content='' />
      </Head>
      <Header />
      <HeroVideo
        bgPath={'https://www.maximekerlidou.fr/videos/bruyere.mp4'}
        logoPath={'/assets/cloche.svg'}
        title={'Galerie Photo'}
        link={'/chef#form'}
        textLink='Réserver'
      />
      <GaleryGrid />

      <ContactForm />
    </>
  );
};

export default Galery;
