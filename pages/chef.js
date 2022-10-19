import Hero from '../components/Hero/Hero';
import Service from '../components/Service/Service';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import Head from 'next/head';
import Footer from '../components/footer/Footer';

const Chef = () => {
  return (
    <>
      <Head>
        <title>La Table de la Bruyère - Chef à Domicile Valenciennes</title>

        <meta
          name='description'
          content='A Valenciennes et aux alentours, Le Chef à domicile de la Table de la Bruyère permet d’organiser un repas chez soi. Il vous laisse ainsi profiter de la compagnie de ses invités.
          Le Chef à domicile s’occupe de : l’achat des ingrédients, la préparation du repas sur place, du service à l’assiette puis range la cuisine avant de s’éclipser. Recevoir chez soi n’a jamais été aussi simple, plaisant et gourmand.
          La prestation Chef à domicile vous libère mais si vous désirez intervenir dans la préparation de votre repas, c’est possible !'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/chef'
        />

        <meta property='og:video' content='' />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/chef'
        />
        <meta property='video' content='' />
        <meta property='video' content='' />
        <meta property='video' content='' />
      </Head>
      <Header />
      <Hero
        bgPath={'/assets/photos/service.webp'}
        logoPath={'/assets/logo.svg'}
        title={'Chef à domicile'}
        text='Le Chef à domicile permet d’organiser un repas chez soi. Il vous laisse ainsi profiter de la compagnie de ses invités. '
        link={'/chef#form'}
        textLink='Reserver'
      />
      <div style={{ height: '40px' }}></div>

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/service.webp'}
        title={'Un service exclusif'}
        ImageSide='left'
        text='Le Chef s’occupe de : l’achat des ingrédients, la préparation du repas sur place, du service à l’assiette puis range la cuisine avant de s’éclipser. Recevoir chez soi n’a jamais été aussi simple, plaisant et gourmand.'
        link={'/chef#form'}
        textLink='Reserver'
      />

      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/service.webp'}
        title={'Pour vous ou avec vous'}
        text='La prestation Chef à domicile vous libère mais si vous désirez intervenir dans la préparation de votre repas, c’est possible !'
        link={'/chef#form'}
        textLink='Reserver'
      />

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/service.webp'}
        title={'Sur mesure'}
        ImageSide='left'
        text='Reservez une prestation sur mersure. Nous procédons à la création d’un menu qui correspond précisément à vos attentes, contrairement à d’autres maisons où la prestation est prédifinie par un menu existant.'
        link={'/chef#form'}
        textLink='Reserver'
      />
      <div id='form'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Chef;
