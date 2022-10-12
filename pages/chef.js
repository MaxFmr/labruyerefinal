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
        text='Le Chef à domicile permet d’organiser un repas chez soi, sans aucune contrainte organisationnelle. Il vous laisse ainsi profiter de la compagnie de ses invités, famille, amis ou relations professionnelles. '
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
        text='Reservez une prestation sur mersure. Nous procédons à la création d’un menu qui correspond précisément à vos attentes, contrairement à d’autres maisons où la prestation est prédifinie par un menu existant'
        link={'/chef#form'}
        textLink='Reserver'
      />
      <div id='form'>
        {' '}
        <ContactForm />
      </div>
    </>
  );
};

export default Chef;
