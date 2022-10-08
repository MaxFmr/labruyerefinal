import StyledContactForm from './contactForm.style';
import Link from 'next/link';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div className='form'>
        <h2>Contactez-nous : </h2>
        <h3>Par téléphone au :</h3>
        <Link href='tel:+33672597863'>
          <a>06 72 59 78 63</a>
        </Link>{' '}
        <h2>Via ce formulaire : </h2>
        <form>
          <label>Sujet de votre message : </label>
          <select name='subject' id='pet-select'>
            <option value=''>Sectionnez un type de prestation*</option>
            <option value='Traiteur évènentiel'>Traiteur évènentiel</option>
            <option value='Cours de cuisine'>Cours de cuisine</option>
            <option value='Chef à domicile'>Chef à domicile</option>
          </select>
          <div>
            <input type='text' placeholder='Votre nom*' required />
          </div>
          <div>
            <input type='text' placeholder='Votre Prénom*' required />
          </div>
          <div>
            <input
              type='text'
              placeholder='Votre numéro de téléphone*'
              required
            />
          </div>
          <div>
            <input type='email' placeholder='Votre Email*' required />
          </div>
          <div>
            <textarea placeholder='Votre message*' />
          </div>
          <div className='rgpd'>
            <input type='checkbox' />

            <span>
              *J’accepte de transmettre ces données à La Table de la Bruyère
              pour être recontacté(e) à des fins commerciales. Ces données ne
              seront transmises à personne d'autre que la Table de La Bruyère.
            </span>
          </div>
          <div className='btn'>
            <button type='submit'>Evoyer</button>
          </div>
        </form>
      </div>
      <div className='logo'>
        <Image src='/assets/logo.svg' height={500} width={500} />
      </div>
    </StyledContactForm>
  );
};
export default ContactForm;
