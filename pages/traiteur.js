import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import Service from '../components/Service/Service';
import Header from '../components/Header/Header';
import Banner1 from '../components/Banner1/Banner1';
import Link from 'next/link';
import ParalaxBanner from '../components/ParallaxBanner/ParallaxBanner';

const TraiteurPage = () => {
  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Traiteur'}
        text='Qualité, saisonalité, expertise et accompagnement.
    '
      />
      <Banner1 bgPath={'/assets/photos/equipe.jpeg'} />
      <Service
        textColor={'#2F4858'}
        photoPath={'/assets/photos/oeuf.webp'}
        title={'Notre cuisine'}
        ImageSide='left'
        text='Forts de notre passion et de notre expérience nous sublimons des produits frais et de qualité, en accord avec la saisonalité.
'
      />

      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/vic.webp'}
        title={'Accompagnement'}
        text='Faire confiance à la Table de la Bruyère, c’est l’assurance d’être suivi et guidé. C’est l’association de notre expertise et de vos envies pour construire ensemble l’évenement qui vous ressemble.'
      />
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
        text='Guillaume STILE, a exercé en tant que chef dans des restaurants réputés, dont La Gentilhommière.
        Il s’est perfectionné au cours de rencontres avec des grands noms de la cuisine française notamment les Chefs Yann Morel, Marc Meurin, Emmanuel Hernandez, Philippe Mille et Hervé Raphanel.'
      />

      <Service
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/foie.webp'}
        title={'Vos évenements'}
        text='Un mariage, un anniversaire, une fête de famille, un séminaire... Nos vous rejoignons à l’endroit de votre choix pour concrétiser votre projet et en faire un moment unique.'
      />
      <ParalaxBanner
        photoPath={
          'https://res.cloudinary.com/amenitiz/image/upload/w_480,dpr_auto,c_scale,q_auto:best/v1636706053/vadbnrua0bvxva4tmvaj.jpg'
        }
        text={''}
        logo={
          'https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1617883865/i06hmu68pax07fnddz0a.png'
        }></ParalaxBanner>

      <p
        style={{
          color: '#2F4858',
          padding: '5%',
          margin: '15% 0% 15% 0%',
          textAlign: 'justify',
        }}>
        Nous sommes aussi traiteur exclusif du domaine : Le Réveil de la
        Bruyère, ouvert depuis octobre 2021. Nous bénéficions d’un cadre de
        rêve, au coeur de l’Avesnois, à proximité de Valenciennes, dans une
        ancienne maison de famille, niché au milieu d’un parc.
        <br />
        <Link href='https://www.lereveildelabruyere.com/fr'>
          Infos et réservations
        </Link>
      </p>

      <ContactForm />
    </>
  );
};

export default TraiteurPage;
