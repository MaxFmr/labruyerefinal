import Service from '../components/Service/Service';
import ContactForm from '../components/ContactForm/ContactForm';
import Header from '../components/Header/Header';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import HeroVideo from '../components/HeroVideo/Herovideo';

const Chef = () => {
  return (
    <>
      <Head>
        <title>La Table de la Bruyère - Chef à Domicile Valenciennes</title>

        <meta
          name='description'
          content='Votre Chef à domicile à Valenciennes et aux alentours. Le Chef à domicile de la Table de la Bruyère permet d’organiser un repas chez soi. Il vous laisse ainsi profiter de la compagnie de ses invités.
          Le Chef à domicile s’occupe de : l’achat des ingrédients, la préparation du repas sur place, du service à l’assiette puis range la cuisine avant de s’éclipser. Recevoir chez soi n’a jamais été aussi simple, plaisant et gourmand.
          La prestation Chef à domicile vous libère mais si vous désirez intervenir dans la préparation de votre repas, c’est possible !'
        />
        <meta
          property='og:url'
          content='https://www.latabledelabruyere.com/chef'
        />

        <meta
          property='og:video'
          content='https://www.maximekerlidou.fr/videos/cours.mp4'
        />

        <meta
          property='url'
          content='https://www.latabledelabruyere.com/chef'
        />
        <meta property='video' content='' />
        <meta property='video' content='' />
        <meta property='video' content='' />
      </Head>
      <Header />
      <HeroVideo
        bgPath={'https://www.maximekerlidou.fr/videos/bruyere.mp4'}
        logoPath={'/assets/cloche.svg'}
        title={'Chef à domicile'}
        link={'/chef#form'}
        textLink='Réserver'
      />

      <div style={{ height: '40px' }}></div>

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/chef/2.jpg'}
        title={'Un service exclusif'}
        ImageSide='left'
        text='Le Chef s’occupe de : l’achat des ingrédients, la préparation du repas sur place, du service à l’assiette puis range la cuisine avant de s’éclipser. Recevoir chez soi n’a jamais été aussi simple, plaisant et gourmand.'
        link={'/chef#form'}
        textLink='Réserver'
      />

      <Service
        textColor={''}
        bgColor={'#2d8e8e'}
        photoPath={'/assets/photos/chef/1.webp'}
        title={'Pour vous ou avec vous'}
        text='Devenez acteur de votre évènement. La prestation Chef à domicile vous libère des contraintes.
        Le Chef à domicile permet d’organiser un repas chez soi. Il vous laisse ainsi profiter de la compagnie de vos invités. '
        link={'/chef#form'}
        textLink='Réserver'
      />

      <Service
        textColor={'#2F4858'}
        bgColor={'#fbf3e0'}
        photoPath={'/assets/photos/chef/4.jpg'}
        title={'Sur mesure'}
        ImageSide='left'
        text='Réservez une prestation sur mesure. Nous procédons à la création d’un menu qui correspond précisément à vos attentes.'
        link={'/chef#form'}
        textLink='Réserver'
      />
      <div id='form'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Chef;
