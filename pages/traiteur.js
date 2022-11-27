import ContactForm from '../components/ContactForm/ContactForm';
import Service from '../components/Service/Service';
import Header from '../components/Header/Header';

import ParalaxBanner from '../components/ParallaxBanner/ParallaxBanner';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import HeroVideo from '../components/HeroVideo/Herovideo';
import Reveil from '../components/Reveil/Reveil';

const TraiteurPage = () => {
  return (
    <>
      <Head>
        <title>La Table de La Bruyère - Traiteur à Valenciennes</title>

        <meta
          name='description'
          content='Faites appel à un traiteur d’exception, La Table de La Bruyère, Traiteur évenementiel, chef à domicile, évenements, mariages, baptèmes, séminaires etc., cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois. Notre chef Guillaume STILE, a exercé dans des restaurants réputés, dont La Gentilhommière.
          Il s’est perfectionné au cours de rencontres avec des grands noms de la cuisine française notamment les Chefs Yann Morel, Marc Meurin, Emmanuel Hernandez, Philippe Mille et Hervé Raphanel.'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/traiteur'
        />

        <meta property='og:video' content='' />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/traiteur'
        />
        <meta
          property='og:title'
          content='La Table de La Bruyère - Traiteur à Vlenciennes'
        />
        <meta
          property='title'
          content='La Table de La Bruyère - Traiteur à Valencienns'
        />
        <meta property='og:type' content='video.movie' />
        <meta property='og:image' content='/assets/photos/service.webp' />
        <meta
          name='video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
        <meta
          property='og:image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />
        <meta
          property='image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />
      </Head>
      <Header />

      <HeroVideo
        bgPath={'https://www.maximekerlidou.fr/videos/bruyere.mp4'}
        logoPath={'/assets/cloche.svg'}
        title={'Traiteur'}
        text='Qualité, saisonnalité, expertise et conseil.'
      />

      {/* <Banner1 bgPath={'/assets/photos/equipe.jpeg'} /> */}

      <Service
        textColor={'#2F4858'}
        photoPath={'/assets/photos/oeuf.webp'}
        title={'Notre cuisine'}
        ImageSide='left'
        text='Forts de notre passion et de notre expérience, nous sublimons des produits frais et de grande qualité, en accord avec la saisonnalité. Notre cuisine rassemble tradition, tendance et plaisir de la table. 
'
        link={'/traiteur#form'}
        textLink='Réserver'
      />
      <div style={{ height: '45px' }}></div>

      <ParalaxBanner photoPath={'/assets/photos/traiteur/2.jpg'} />

      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/vic.webp'}
        title={'Conseil'}
        text='Faire confiance à la Table de la Bruyère, c’est l’assurance d’être suivi et guidé. C’est l’association de notre expertise et de vos envies pour construire ensemble l’évenement qui vous ressemble.'
        link={'/traiteur#form'}
        textLink='Réserver'
      />
      <div style={{ height: '45px' }}></div>

      <ParalaxBanner photoPath={'/assets/photos/macro.jpg'} />
      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/guinb.webp'}
        title={'Notre Chef'}
        ImageSide='left'
        text='Guillaume Stile a exercé dans des restaurants réputés, dont La Gentilhommière.
        Il s’est perfectionné au cours de rencontres avec des grands noms de la cuisine française notamment les Chefs Yann Morel, Marc Meurin, Emmanuel Hernandez, Philippe Mille et Hervé Raphanel.'
        link={'/traiteur#form'}
        textLink='Réserver'
      />
      <div style={{ height: '45px' }}></div>

      <ParalaxBanner
        photoPath={'/assets/photos/traiteur/salle_edito.webp'}
        text={
          'A la recherche d’une salle privative (jusque 18 places assises) pour vos repas privés ou rencontres professionnelles? Contactez-nous ! Nous sommes équipés d’un grand écran interractif et tactile, idéal pour les présentations et le travail collectif.'
        }
      />

      <Service
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/foie.webp'}
        title={'Vos évenements'}
        text='Un mariage, un anniversaire, une fête de famille, un séminaire... Nous vous rejoignons à l’endroit de votre choix pour concrétiser votre projet et en faire un moment unique.'
        link={'/traiteur#form'}
        textLink='Réserver'
      />
      <div style={{ height: '45px' }}></div>
      <Reveil />
      <div id='form'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default TraiteurPage;
