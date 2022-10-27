import css from '../styles/Footer.module.css'
import {UilFacebook} from '@iconscout/react-unicons'
import {UilInstagram} from '@iconscout/react-unicons'
import {UilTwitter} from '@iconscout/react-unicons'
import {UilLinkedin} from '@iconscout/react-unicons'

export default function Footer () {
    return(
      <div className={css.container}>
        <p>Find more about us</p>
            <div className={css.social}>
            <UilFacebook size ="45" color='black'/>
            <UilInstagram size ="45" color='black'/>
            <UilLinkedin size ="45" color='black'/>
            <UilTwitter size ="45" color='black'/>
            </div>
      </div>
    )
  }