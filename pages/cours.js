import Hero from '../components/Hero/Hero';
import Service from '../components/Service/Service';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import ParalaxBanner from '../components/ParallaxBanner/ParallaxBanner';
import Footer from '../components/footer/Footer';

const CoursPage = () => {
  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'École de la table'}
        text='Un moment convivial autour de l’apprentissage de la cuisine.'
      />
      <div style={{ height: '5vh' }}></div>

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/service.webp'}
        title={'Une École'}
        ImageSide='left'
        text=' Vivez, seul(e) ou en groupe, à la demi-journée, une expérience unique qui vous transporte dans une école de la table inspirée des plus grandes institutions gastronomiques Française.   
'
        link={'/cours#form'}
        textLink='Reserver'
      />
      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/service.webp'}
        title={'Des compétences'}
        text='Vous serez en mesure de surprendre vos convives, avec une cuisine de restaurant. Les techniques professionnelles et astuces du chef vous permettrons d’améliorer vos recettes
!'
        link={'/cours#form'}
        textLink='Reserver'
      />
      <ParalaxBanner
        photoPath={
          'https://media.istockphoto.com/photos/cooking-master-class-pasta-preparing-hands-picture-id1268900953'
        }
        text='Le cours de cuisine est un moment convivial, idéal pour générer de la cohésion sur des évenemnts de type "team building" ou encore créer un temps collectif pendant un enterrement de vie de célibataire !'
      />
      <div style={{ height: '5vh' }}></div>

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/service.webp'}
        title={'Réservations'}
        text='Prenez contact avec nous par téléphone ou via le formulaire ci-dessous pour réserver un cours, pour un groupe ou connaître les ateliers orgnisés afin de vous y joindre.'
        ImageSide='left'
        link={'/cours#form'}
        textLink='Reserver'
      />
      <div id='form'>
        <ContactForm photoPath={'/assets/photos/service.webp'} />
      </div>
      <Footer />
    </>
  );
};

export default CoursPage;
