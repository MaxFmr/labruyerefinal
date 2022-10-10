import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import Service from '../components/Service/Service';
import Header from '../components/Header/Header';
import Banner1 from '../components/Banner1/Banner1';
import ParalaxBanner from '../components/ParallaxBanner/ParallaxBanner';

const TraiteurPage = () => {
  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Traiteur'}
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Adipisci, minima quasi?
    !'
      />
      <Banner1 bgPath={'/assets/photos/equipe.jpeg'} />
      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/culi3.jpg'}
        title={'Vos évenements'}
        ImageSide='left'
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
    Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
    repellendus aspernatur et excepturi saepe incidunt voluptate
'
      />
      <ParalaxBanner />

      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/vic.webp'}
        title={'Vos évenements'}
        ImageSide=''
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
    Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
    repellendus aspernatur et excepturi saepe incidunt voluptate
    sit amet con'
      />
      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/culi12.jpg'}
        title={'Vos évenements'}
        ImageSide='left'
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
    Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
  '
      />
      <ContactForm />
    </>
  );
};

export default TraiteurPage;
