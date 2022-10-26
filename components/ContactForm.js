import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="row">
          <form name="form-contact" method="POST"  data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="yourname">
                Nume
              </label>
              <input type="text" name="firstname" id="firstname" />
            </p>
            <p>
              <label htmlFor="youremail">
                Email
              </label> <br />
              <input type="email" name="email" id="youremail" />
            </p>
            <p>
              <label htmlFor="yourmessage">
                Mesaj
              </label> <br />
              <textarea name="message" id="yourmessage"></textarea>
            </p>
            <p>
              <p>
                <button type="submit" className="btn">Trimite</button>
              </p>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
