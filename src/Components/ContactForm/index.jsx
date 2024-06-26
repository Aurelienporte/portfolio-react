import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contactForm.css";

export const ContactUs = () => {
  const form = useRef();
  const name = useRef();
  const [confirmMessage, setConfirmMessage] = useState("Envoyer");
  const [confirmClass, setConfirmClass] = useState("default");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "7vIdbS-aV2uSvKT8D",
      })
      .then(
        (response) => {
          console.log("SUCCESS!");
          if (response.status === 200) {
            setConfirmMessage("Message envoyé !");
            setConfirmClass("success");
            form.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
          setConfirmMessage("Echec de l'envoi");
          setConfirmClass("failure");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      autoComplete="on"
      className="contactform"
    >
      <div className="contactform__item">
        <label htmlFor="name">
          Nom <span className="invalid">Champ invalide</span>
        </label>
        <input
          id="name"
          ref={name}
          type="text"
          name="user_lastname"
          autoComplete="family-name"
          required
        />
      </div>
      <div className="contactform__item">
        <label htmlFor="firstname">
          Prénom <span className="invalid">Champ invalide</span>
        </label>
        <input
          id="firstname"
          type="text"
          name="user_firstname"
          autoComplete="given-name"
          required
        />
      </div>
      <div className="contactform__item">
        <label htmlFor="email">
          Email <span className="invalid">Champ invalide</span>
        </label>
        <input
          id="email"
          type="email"
          name="user_email"
          autoComplete="email"
          required
          pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
        />
      </div>
      <div className="contactform__item">
        <label htmlFor="message">
          Message <span className="invalid">Champ invalide</span>
        </label>
        <textarea id="message" name="message" required />
      </div>
      <input type="submit" value={confirmMessage} className={confirmClass} />
    </form>
  );
};
