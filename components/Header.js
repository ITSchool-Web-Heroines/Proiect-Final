import css from '../styles/Header.module.css'
import {UilShoppingBag} from '@iconscout/react-unicons'


export default function Header () {
  return(
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <p>Rhevox</p>
      </div>

      {/* menu side */}
      <ul className={css.menu}>
        <li>About</li>
        <li>Contact</li>
        <li>Home</li>
        <li>Products</li>
      </ul>

      {/* right side */}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag size={35}/>
        <div className={css.badge}>0</div>
        </div>
      </div>
    </div>
  )

}