import styles from "./Footer.module.scss";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons"

export default function Footer () {
    return (
        <div className={styles.footerbox}>
            <div className={styles.iconbox}>
                <Link href="https://www.linkedin.com">
                    <a target="_blank"><FontAwesomeIcon icon={faLinkedin} className ={styles.icons}/></a>
                </Link>
                <Link href="https://github.com">
                    <a target="_blank"><FontAwesomeIcon icon={faGithub} className ={styles.icons}/></a>
                </Link>
                <Link href="https://codepen.io">
                    <a target="_blank"><FontAwesomeIcon icon={faCodepen} className ={styles.icons}/></a>
                </Link> 
            </div> 
            <p className={styles.copy}>Copyright &copy; Timea Csudom </p>        
        </div>
    )
}

