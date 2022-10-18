import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';

const ContactPage = () => {
  return (
    <>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Contactez-nous'}
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
