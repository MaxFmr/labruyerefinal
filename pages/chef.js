import Hero from '../components/Hero/Hero';
import Service from '../components/Service/Service';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';

const Chef = () => {
  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Chef à domicile'}
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
        Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
        repellendus aspernatur et excepturi saepe incidunt voluptate
        laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Adipisci, minima quasi?
    !'
      />
      <Service
        textColor={''}
        bgColor={''}
        photoPath={'/assets/photos/service.webp'}
        title={'Vos évenements'}
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
    Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
    repellendus aspernatur et excepturi saepe incidunt voluptate
    laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Adipisci, minima quasi?
!'
      />
      <Service
        textColor={''}
        bgColor={''}
        photoPath={'/assets/photos/service.webp'}
        title={'Vos évenements'}
        ImageSide='left'
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
    Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
    repellendus aspernatur et excepturi saepe incidunt voluptate
    laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Adipisci, minima quasi?
!'
      />
      <Service
        textColor={''}
        bgColor={''}
        photoPath={'/assets/photos/service.webp'}
        title={'Vos évenements'}
        text='l Lorem ipsum dolor sit amet consectetur adipisicing elit
    Eaque officiis illo dolores, quidem, facilis iure odio omnis ipsa
    repellendus aspernatur et excepturi saepe incidunt voluptate
    laborum provident illum! Dignissimos, soluta! Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Adipisci, minima quasi?
!'
      />
      <ContactForm />
    </>
  );
};

export default Chef;
