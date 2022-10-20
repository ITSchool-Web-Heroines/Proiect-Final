import Head from 'next/head'
import css from '../styles/Contact.module.scss'

export default function Contact() {
  return (
    <div className={css.container}>
      <Head>
        <title>Rhevox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Contact us</h1>
      <p>text</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact Information
          </h4>
          <p> text</p>
          <div className="icon-text">
            <i className="icon"></i>
            <p>text</p>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i className="icon"></i>
            </a>

          </div>

        </div>
          <form>

          </form>

      </div>
    </div>
  )
}
