import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contactez La Table de La Bruyère</title>

        <meta
          name='description'
          content='Contactez Le traiteur, Chef à domicile, Ecole de la table, pour demande d’informations, devis par téléphone où grâce à ce formulaire. La table de la Bruyère, nous nous engageons à vous répondre dans les plus brefs délais'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/contact'
        />

        <meta property='og:video' content='' />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/contact'
        />
        <meta property='video' content='' />
        <meta property='video' content='' />
        <meta property='video' content='' />
      </Head>
      <Header />
      <Hero
        bgPath={'/assets/photos/cours/1.jpg'}
        logoPath={'/assets/logo.svg'}
        title={'Contactez-nous'}
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
