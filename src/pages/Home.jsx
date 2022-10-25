import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
  <div className="container">
    <h1 className="titlu">
      Aducem la viață proiectul pe care l-ai visat
    </h1>

    <NavLink to="contact" className="button"> Contactează-ne </NavLink>

    <h3 className="titlu-2">
      Amenajări spații publice, comerciale și rezidențiale
    </h3>

    <img
      className="image"
      src={'images/insula.jpeg'}
      alt="Poza insulă"
      style={{width: "79%", height: "100%"}}
    />

    <main className="main">
      <h4 className="subtitlu">De ce să lucrezi cu noi?</h4>
      <nav>
        <ul className="text">
          <li>
            Creăm experiențe vizuale de top - Fiind specializați în design-ul
            de locații, viziunea noastră este una foarte clară: aceea de a
            oferi cea mai bună experiență vizuală posibilă pentru clienții
            tăi. Portofoliul nostru te va convinge de acest lucru.
          </li>

          <li>
            Proiecte executate în timp util - De la crearea conceptului,
            planificarea spațiului și până la execuție, iți oferim servicii
            complete de design interior. Acest aspect ne ajută să respectăm
            întotdeauna termenele limită setate.
          </li>

          <li>
            Management eficient al bugetului - Am dezvoltat de-a lungul
            timpului parteneriate cu furnizori de materiale ce oferă un raport
            calitate-preț excelent, scopul nostru fiind acela de a-ți oferi
            cele mai bune soluții din punct de vedere al bugetului.
          </li>
        </ul>
      </nav>
    </main>
  </div>
);
}

export default Home;
