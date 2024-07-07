import StyledContactForm from "./contactForm.style";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Modale from "../Modale/Modale";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ContactForm = () => {
  const router = useRouter();
  const form = useRef();
  const captchaRef = useRef(null);

  const [loader, setLoader] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const OpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  const sendEmail = async (e) => {
    //captcha token
    const token = captchaRef.current.getValue();

    e.preventDefault();

    captchaRef.current.reset();

    //post token to server to verify it

    try {
      const response = await axios.post("/api/captcha", { token });

      if (response.data.success === true) {
        alert("Le captcha a été validé, vous pouvez envoyer votre message");
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_APIKEY
          )
          .then(setLoader(true))
          .then(
            () => {
              setLoader(false);
              OpenModal();
            },
            (error) => {
              alert(error.text);
            }
          );
      } else {
        alert("Le captcha a échoué, vous êtes considéré comme un robot");
      }
    } catch (error) {
      alert(error.text);
    }
  };

  let defaultValue = "";
  switch (router.asPath) {
    case "/traiteur":
      defaultValue = "Traiteur évènentiel";
      break;
    // case "/chef":
    //   defaultValue = "Chef à domicile";
    //   break;
    case "/cours":
      defaultValue = "Cours de cuisine";
      break;
    default:
      defaultValue = "";
  }
  // note
  return (
    <StyledContactForm path={router.asPath}>
      {modalIsOpen && <Modale onCloseModal={onCloseModal} />}
      <div className="form">
        <h2>Contactez-nous : </h2>
        <h3>Par téléphone au :</h3>
        <Link href="tel:+33672597863">
          <a>06 80 88 46 15</a>
        </Link>
        <h2>Via ce formulaire : </h2>
        <span>
          A la réception de votre message, nous vous recontacterons au plus
          vite.
        </span>
        <div style={{ height: "10px" }}></div>
        {!loader ? (
          <form ref={form} onSubmit={sendEmail}>
            <label>Sujet de votre message : </label>
            <select name="service" id="service" defaultValue={defaultValue}>
              <option value="">Sectionnez un type de prestation*</option>
              {/* <option value="Traiteur évènentiel">Traiteur évènementiel</option> */}
              <option value="Cours de cuisine">Cours de cuisine</option>
              {/* <option value="Chef à domicile">Chef à domicile</option> */}
            </select>
            <div>
              <input
                type="text"
                placeholder="Votre nom*"
                required
                id="name"
                name="user_name"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Votre Prénom*"
                required
                id="firstname"
                name="user_firstname"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Votre numéro de téléphone*"
                required
                id="phone"
                name="user_phone"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre Email*"
                required
                id="email"
                name="user_email"
              />
            </div>
            <div>
              <span>Quelle date de prestation désirez-vous ? (facultatif)</span>
              <input type="date" id="date" name="date" />
            </div>

            <div>
              <textarea
                id="message"
                name="user_message"
                placeholder="Votre message* (n’hésitez pas à préciser un maximum d’éléments tels que le nombre de personnes attendus etc.)"
              />
            </div>

            <div className="rgpd">
              <input type="checkbox" required />

              <span>
                *J’accepte de transmettre ces données à La Table de la Bruyère
                pour être recontacté(e) à des fins commerciales. Ces données ne
                seront transmises à personne d’autre que la Table de La Bruyère.
              </span>
              <Link href={"/legal"}>Mentions légales</Link>
            </div>
            <div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY}
                ref={captchaRef}
              />
            </div>
            <div className="btn">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        ) : (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#257676", "#fbf3e0", "#2d8e8e", "#efc33c", "#2F4858"]}
          />
        )}
      </div>
      <div className="logo">
        <Image
          src="/assets/g8.svg"
          height={300}
          width={300}
          alt="logo de l'entreprise traiteur la table de la Bruyère Valenciennes"
        />
      </div>
    </StyledContactForm>
  );
};

export default ContactForm;
