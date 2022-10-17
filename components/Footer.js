import css from '../styles/Footer.module.css'
import {UilFacebook} from '@iconscout/react-unicons'
import {UilInstagram} from '@iconscout/react-unicons'

export default function Footer () {
    return(
      <div className={css.container}>
        <span>ALL RIGHTS RESERVED</span>
            <div className={css.social}>
            <UilFacebook color='black'/>
            <UilInstagram color='black'/>
            </div>
      </div>
    )
  }