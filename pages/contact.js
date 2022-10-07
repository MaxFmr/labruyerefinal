import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Contactez-nous'}
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

export default ContactPage;
