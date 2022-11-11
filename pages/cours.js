import Service from '../components/Service/Service';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import ParalaxBanner from '../components/ParallaxBanner/ParallaxBanner';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import HeroVideo from '../components/HeroVideo/Herovideo';

const CoursPage = () => {
  return (
    <>
      <Head>
        <title>École de la Table de La Bruyère - Cours de cuisine</title>

        <meta
          name='description'
          content='Cours de cuisine. École de la Table de La Bruyère à Valenciennes, vivez, seul(e) ou en groupe, en cuisne ou à domicile, à la demi-journée, une expérience unique qui vous transporte dans une école de la table inspirée des plus grandes institutions gastronomiques Française. Vous serez en mesure de surprendre vos convives, avec une cuisine de restaurant. Les techniques professionnelles et astuces du chef vous permettrons d’améliorer vos recettes. Le cours de cuisine est un moment convivial, idéal pour générer de la cohésion sur des évenements de type "team building" ou encore créer un temps collectif pendant un enterrement de vie de célibataire !'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/cours'
        />

        <meta property='og:video' content='' />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/cours'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/cours'
        />
        <meta property='video' content='' />
        <meta
          property='og:title'
          content='École de la Table de La Bruyère - Cours de cuisine'
        />
        <meta property='og:type' content='video.movie' />
        <meta property='og:image' content='/assets/photos/service.webp' />
      </Head>
      <Header />
      <HeroVideo
        bgPath={'https://www.maximekerlidou.fr/videos/cours.mp4'}
        logoPath={'/assets/cloche.svg'}
        title={'École de la table'}
        text='Un moment convivial autour de l’apprentissage de la cuisine.'
      />

      <div style={{ height: '5vh' }}></div>

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/cours/1.jpg'}
        title={'Une École'}
        ImageSide='left'
        text=' Vivez, seul(e) ou en groupe, à la demi-journée, une expérience unique qui vous transporte dans une école de la table inspirée des plus grandes institutions gastronomiques Françaises.   
'
        link={'/cours#form'}
        textLink='Réserver'
      />
      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/cours/2.jpg'}
        title={'Des compétences'}
        text='Vous serez en mesure de surprendre vos convives, avec une cuisine de restaurant. Les techniques professionnelles et astuces du chef vous permettrons d’améliorer vos recettes
!'
        link={'/cours#form'}
        textLink='Réserver'
      />
      <div style={{ height: '15vh' }}></div>

      <ParalaxBanner
        photoPath={'/assets/photos/cours/3.jpg'}
        text='Le cours de cuisine est un moment convivial, idéal pour générer de la cohésion sur des évenements de type "team building" ou encore créer un temps collectif pendant un événement privilégié (enterrement de vie de célibataire, réunion de famille, activité entres amis ... ).'
      />

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/cours/4.jpg'}
        title={'Réservations'}
        text='Prenez contact avec nous par téléphone ou via le formulaire ci-dessous pour réserver un cours, ou connaître les ateliers organisés afin de vous y joindre.
       '
        ImageSide='left'
        link={'/cours#form'}
        textLink='Réserver'
      />
      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/ris.webp'}
        title={'L’école s’invite aussi chez vous !'}
        text='Pour un cours particulier ou collectif à domicile, idéal pour un moment convivial entre amis ou en famille !'
        link={'/cours#form'}
        textLink='Réserver'
      />
      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/huile.webp'}
        title={'Modalités et Tarifs'}
        text='Les cours de cuisine sont organisés le lundi après-midi, toutes les deux semaines, de 13H00 à 15H30. Le tarif est de 80€ par personne. Nos cours sont prévus pour des groupes comprenant jusque 8 personnes.'
        ImageSide='left'
        link={'/cours#form'}
        textLink='Réserver'
      />
      <div style={{ height: '5vh' }}></div>

      <div id='form'>
        <ContactForm photoPath={'/assets/photos/service.webp'} />
      </div>
      <Footer />
    </>
  );
};

export default CoursPage;
