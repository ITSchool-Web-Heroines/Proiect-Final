import React from "react";

const Contact = () => {
  const contacts = [
    {
      name: "Cerasela Alb",
      telephone: '0727xxxxxx',
    },
    {
      name: "Mihail Alb",
      telephone: '0752xxxxxx',
    },
  ]
  return (
    <div className="info">
      <h2 className="contact-title">Vino să povestim despre proiectul tău</h2>
      <ul className="date-contact">
        <li>
          <span className="material-symbols-outlined">pin_drop </span>
          Str. Bistrița, Timișoara, jud. Timiș
        </li>
        {
          contacts.map(contact => <li key={contact}>
                <span className="material-symbols-outlined">smartphone</span>
                tel. { contact.telephone } &minus; { contact.name }
           </li>)
        }
        <li>
          <span className="material-symbols-outlined">mail</span>
          e-mail: xxxxx@twg.com
        </li>
      </ul>

      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89103.93341143928!2d21.146549712603935!3d45.741162958869296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745677dcb0fb5a7%3A0x537faf6473936749!2sTimi%C8%99oara!5e0!3m2!1sen!2sro!4v1658317724984!5m2!1sen!2sro"
        width="600"
        height="450"
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        title={'iframe'}
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  );
} 

export default Contact;