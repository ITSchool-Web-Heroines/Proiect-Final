import css from '../styles/Navbar.module.css'
import {UilShoppingBag} from '@iconscout/react-unicons'
import { useRouter } from "next/router"
import Link from "next/link"

const navigationRoutes = ["about", "contact", "home", "products"];

export default function Navbar () {
  const router = useRouter();
  return(
    
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <p>Rhevox</p>
      </div>

      {/* menu side */}
      <nav className={css.menu}>
      {navigationRoutes.map((singleRoute) => {
        return (
          <NavigationLink
            key={singleRoute}
            href={`/${singleRoute}`}
            text={singleRoute}
            router={router}
          />
        );
      })}
    </nav>

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

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        href={href === "/home" ? "/" : href}
        className={`${isActive && "nav_item_active"} nav_item`}
      >
        {text}
      </a>
    </Link>
  );
}
