import React from "react";

function About() {
  return (
    <div className="container-despre">
      <h3>DESPRE NOI</h3>
      <p>
        TWG Group este un studio de design din Timișoara care promovează un stil
        de viață bazat pe confort și un mediu cu adevărat de neuitat prin
        amenajări personalizate. Filozofia de bază a noastra este de a crea
        soluții individuale, funcționale și nu în ultimul rând, impozante din
        punct de vedere estetic pentru clienții care își doresc o viață
        confortabilă. Pentru noi, nu există sarcini imposibile, iar orice nouă
        provocare ne face să venim cu soluții și idei noi.
      </p>

      <h3>ETAPE PROIECT</h3>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
              <strong>1. Discuția cu clientul</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Telefonic sau live, în funcție de situație, în urma căreia se va întocmi
              oferta de preț pentru partea de proiectare. Este important ca viitorul
              nostru client să furnizeze următoarele informații ca oferta să fie
              făcută corect: planul spațiului existent și/sau modificat, dacă
              proiectul se va face integral (proiectare și execuție etc.), ce stil de
              amenajare se dorește, dacă se va păstra ceva din amenajarea actuală sau
              dacă există anumite piese care se vor refolosi în proiect (au o valoare
              spirituală etc.) și termenul de predare al proiectului de design și de
              execuție.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>2. Semnarea contractului și plata avansului</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Dacă s-a aprobat oferta, atunci pasul următor constă în semnarea
              contractului și plata avansului. În urma acesteia se va începe lucrul
              asupra proiectului. Va avea loc o întâlnire la fața locului unde se vor
              discuta nevoile și preferințele beneficiarului. În anumite cazuri (de cele
              mai multe ori când clientul confirmă că nu știe ce își dorește) se va
              completa un chestionar, pentru a ne ajuta să înțelegem în ce direcție
              trebuie să înaintăm pentru a propune un proiect conform așteptărilor.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>3. Releve și poze cu șantierul sau spațiul</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Se va face releveul și pozele din spațiu/ șantier. Vom lua toate cotele
              necesare pentru a putea lucra asupra noului proiect. Se vor face poze și
              video. Important! Aceste cote nu sunt finale pentru mobilierul realizat la
              comandă, furnizorul în cauză este obligat să vină să măsoare încă o dată
              spațiul (pe zonele de care are nevoie) pentru a evita greșelile de
              execuție!
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour"
                    aria-expanded="false" aria-controls="collapseFour">
              <strong> 4. Documentare </strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Se va face documentarea pentru a înțelege stilul, gama cromatică,
              materialele, dar și ambianța pe care trebuie să o propuneți. Tot această
              etapă presupune și găsirea unui concept, acel ceva care va diferenția
              proiectul de celelalte amenajări. Poate un fototapet personalizat regăsit
              ca laitmotiv în toată casa sau ideea de a crea un stil unitar. Acest
              aspect îi distinge pe designerii buni de cei de duzină. Documentarea
              constă dintr-o selecție de poze trimise către client.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <strong>5. Moodboard</strong>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              În unele cazuri este nevoie să se realizeze moodboard-uri de prezentare în
              care să includem mobilierul, accesoriile sau corpurile de iluminat.
              Această etapă ne poate ajuta și la bugetarea fiecărei camere, în așa fel o
              să ne asigurăm că ceea ce propunem va corespunde sumei totale de care
              dispuneți dvs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <strong> 6. Mobilare în plan </strong>
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Vom veni cu propuneri de mobilare în plan pentru a ne asigura că piesele
              de mobilier vor încăpea, iar întregul spațiu este ergonomic și ușor de
              accesat.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              <strong>7. Proiect 3D și randări</strong>
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Aceasta este etapa în care vom veni cu proiectul 3D pentru a vă da
              posibilitatea să vizualizați viitorul spațiu cu toate finisajele,
              materialele, mobilier, decorațiuni etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              <strong> 8. Proiect tehnic </strong>
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              După ce se aprobă proiectul 3D (care de obicei durează în jur de 1-2
              săptămâni cu tot cu modificări), poate începe și partea de detaliere și
              tot ce înseamnă planșele tehnice, care diferă de la un proiect la altul în
              funcție de complexitate. Aceste detalii ne permit să explicăm mai departe
              ce are de făcut fiecare furnizor sau executant.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              <strong> 9. Execuție și urmărire pe șantier</strong>
            </button>
          </h2>
          <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Ca proiectul să meargă conform așteptărilor este recomandat ca execuția să
              se facă de o echipă de contructori/meseriași, cu un șef de șantier în
              frunte cu care să ținem și legătura
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
