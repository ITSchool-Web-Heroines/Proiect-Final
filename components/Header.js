import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../images/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'


export default function Header () {
  return(
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt ="" width={50} height={50}/>
      </div>

      {/* menu side */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>


      {/* right side */}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag/>
        <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  )

}