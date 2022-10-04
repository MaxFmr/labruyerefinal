import StyledContactForm from './contactForm.style';

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div className='form'>
        <h2>Contactez-nous : </h2>
        <h3>Par téléphone au :</h3>
        <span>06 06 06 06 06</span>
        <h2>Via ce formulaire : </h2>
        <form>
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
          <button type='submit'>Evoyer</button>
        </form>
      </div>
      <div className='logo'>hello</div>
    </StyledContactForm>
  );
};
export default ContactForm;
