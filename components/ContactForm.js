import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact" id="contact">

        <div className="row">
          <form className="form-contact" action="/success" method="POST" data-netlify="true">
            <h3>Trimite un mesaj!</h3>
            <input type="text" placeholder="Numele" className="input-box" />
            <input type="email" placeholder="Email" className="input-box" />
            <input type="number" placeholder="Telefon" className="input-box" />
            <input type="text" placeholder="Subiect" className="input-box" />
            <textarea
              name="form"
              placeholder="Mesaj"
              className="input-box"

              cols={30}
              rows={10}
              value={""}
            />
            <input type="submit" value="Trimite" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
