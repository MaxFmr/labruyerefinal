import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import Service from '../components/Service/Service';
import Header from '../components/Header/Header';
import Banner1 from '../components/Banner1/Banner1';
import Link from 'next/link';
import ParalaxBanner from '../components/ParallaxBanner/ParallaxBanner';
import Head from 'next/head';
import Footer from '../components/footer/Footer';

const TraiteurPage = () => {
  return (
    <>
      <Head>
        <title>La Table de La Bruyère - Traiteur</title>

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
      <Header />
      <Hero
        bgPath={'/assets/photos/traiteur/1.jpg'}
        logoPath={'/assets/logo.svg'}
        title={'Traiteur'}
        text='Qualité, saisonalité, expertise et conseil.
    '
      />
      <Banner1 bgPath={'/assets/photos/equipe.jpeg'} />

      <Service
        textColor={'#2F4858'}
        photoPath={'/assets/photos/oeuf.webp'}
        title={'Notre cuisine'}
        ImageSide='left'
        text='Forts de notre passion et de notre expérience, nous sublimons des produits frais et de grande qualité, en accord avec la saisonalité. Notre cuisine rassemble tradition, tendance et plaisir de la table. 
'
        link={'/traiteur#form'}
        textLink='Reserver'
      />

      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/vic.webp'}
        title={'Conseil'}
        text='Faire confiance à la Table de la Bruyère, c’est l’assurance d’être suivi et guidé. C’est l’association de notre expertise et de vos envies pour construire ensemble l’évenement qui vous ressemble.'
        link={'/traiteur#form'}
        textLink='Reserver'
      />
      <div style={{ height: '45px' }}></div>

      <ParalaxBanner
        photoPath={'/assets/photos/macro.jpg'}
        text={
          '"Classique ou moderne, il n’y a qu’une seule cuisine... La bonne." Paul Bocuse'
        }
      />
      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/guinb.webp'}
        title={'Notre Chef'}
        ImageSide='left'
        text='Guillaume STILE, a exercé dans des restaurants réputés, dont La Gentilhommière.
        Il s’est perfectionné au cours de rencontres avec des grands noms de la cuisine française notamment les Chefs Yann Morel, Marc Meurin, Emmanuel Hernandez, Philippe Mille et Hervé Raphanel.'
        link={'/traiteur#form'}
        textLink='Reserver'
      />

      <Service
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/foie.webp'}
        title={'Vos évenements'}
        text='Un mariage, un anniversaire, une fête de famille, un séminaire... Nos vous rejoignons à l’endroit de votre choix pour concrétiser votre projet et en faire un moment unique.'
        link={'/traiteur#form'}
        textLink='Reserver'
      />
      <div style={{ height: '45px' }}></div>

      <ParalaxBanner
        photoPath={
          'https://res.cloudinary.com/amenitiz/image/upload/w_2000,dpr_auto,c_scale,q_auto:best/v1636706053/vadbnrua0bvxva4tmvaj.jpg'
        }
        text={''}
        logo={
          'https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1617883865/i06hmu68pax07fnddz0a.png'
        }></ParalaxBanner>

      <p
        className='reveil'
        style={{
          color: '#2F4858',
          padding: '3%',
          margin: '3vh 0% 10vh 0%',
          textAlign: 'justify',
          fontSize: '1.2em',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Nous sommes aussi le traiteur exclusif du domaine Le Réveil de la
        Bruyère.
        <br /> Nous bénéficions d’un cadre de rêve, au coeur de l’Avesnois, à
        proximité de Valenciennes, dans une ancienne maison de famille, niché au
        milieu d’un parc.
        <br />
        <div style={{ marginTop: '10px' }}></div>
        <Link href='https://www.lereveildelabruyere.com/fr'>
          Infos et réservations
        </Link>
      </p>
      <div id='form'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default TraiteurPage;
