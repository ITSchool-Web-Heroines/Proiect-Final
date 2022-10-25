import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact" id="contact">

        <div className="row">
        <label htmlFor="name">Enter your name:
        <form className="form-contact" name="form-contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select></label>
              </p>
              <p>
                <label>Message: <textarea name="message" defaultValue={""} /></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form> </label>
          <input type="text" id="name" />
        </div>
        
      </section>
    </>
  );
};

export default ContactForm;
