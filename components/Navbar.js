import Link from 'next/link';
import NavSt from '../styles/Home.module.css';
import Image from 'next/image'

function Navbar() {
  
  return (
    <div className={NavSt.NavbarContainer}>
      <div className={NavSt.ASection}>
        <div className={NavSt.Icon}>
          
          <image
            src={'/Slogo.png'}
            width={100}
            height={100}
           />
        </div>
        <Link href="/"> About</Link></div>
      <div className={NavSt.LSction}><Link href="/blog"> Lifestyle </Link></div>
      <div className={NavSt.SSction}> <Link href="/skin">Skincare</Link></div>
      <div className={NavSt.BSction}><Link href="/books">Books</Link></div>
      <div className={NavSt.HSection}><Link href="/health">Health</Link></div>
      <div className={NavSt.CSection}><Link href="/contact"> Contact</Link></div>
      <div className={NavSt.Icon}>
        <image
          src={'/social.png'}
          width={100}
          height={100} />
      </div>
    </div>

  )
}
export default Navbar