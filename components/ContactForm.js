import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact" id="contact">

        <div className="row">
          <form className="form-contact" method="POST" data-netlify="true">
            <h3>Trimite un mesaj!</h3>
            <input type="text" name="nume" placeholder="Numele" className="input-box" />
            <input type="email" name="email" placeholder="Email" className="input-box" />
            <input type="number" name="telefon" placeholder="Telefon" className="input-box" />
            <input type="text" name="subiect" placeholder="Subiect" className="input-box" />
            <label htmlFor="message">Mesajul tau pentru noi*</label>

            <textarea id="message" name="message" className="input-box" required></textarea>
            <input type="submit" name="trimite" value="Trimite" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
