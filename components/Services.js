import css from "../styles/Services.module.css";

export default function Services () {
  return(
    <div className={css.services}>
      <h1>Who are WE</h1>
          <div className={css.content}>
            <div className={css.cards}>
              <div className={css.card}>  
                <div className={css.sbox}>
                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsum</p>
                  <a hreh="#">Learn More</a>
                </div>
              </div>

              <div className={css.card}>  
                <div className={css.sbox}>
                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsumt</p>
                  <a hreh="#">Learn More</a>
                </div>
              </div>

              <div className={css.card}>  
                <div className={css.sbox}>
                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsum</p>
                  <a hreh="#">Learn More</a>
                </div>
              </div>

            </div>
          </div>
    </div>
  )
}
