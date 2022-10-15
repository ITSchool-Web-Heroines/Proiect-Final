import css from '../styles/Header.module.css'
import Logo from '../images/Logo.png'
import ShoppingBag from '../images/Sbag.jpg'


export default function Header () {
  return(
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
      <img src={Logo} alt =""
      width={50} height={50}/>
      <span>Rhevox</span>
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
        <img src={ShoppingBag} alt ="" size={50}/>
        </div>
      </div>
    </div>
  )

}