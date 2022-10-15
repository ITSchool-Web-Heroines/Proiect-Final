import css from '../styles/Footer.module.css'
import Facebook from '../images/SocialMedia/Facebook.jpg'
import Instagram from '../images/SocialMedia/Instagram.jpg'
import TikTok from '../images/SocialMedia/TikTok.jpg'

export default function Footer () {
    return(
      <div className={css.container}>
        <span>ALL RIGHTS RESERVED</span>
            <div className={css.container}>
             <img src={Facebook} size={50}/>
             <img src={Instagram} size={50}/>
             <img src={TikTok} size={50}/>
            </div>
      </div>
    )
  }