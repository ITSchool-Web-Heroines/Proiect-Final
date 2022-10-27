import Image from 'next/image'
import css from '../styles/Info.module.css'
import Tech from '../images/Tech.gif'
import {UilCircuit} from '@iconscout/react-unicons'
import {UilPhone} from '@iconscout/react-unicons'
import {BrowserRouter as Router, Link} from 'react-router-dom'

export default function Info() {
    return(
        <Router>
        <div className={css.container}>
            
            {/*left side */}
            <div className={css.left}>
                
                <div className={css.miniboxDiv}>
                    <p>More than Faster</p>
                    <UilCircuit/>
                </div>

                <div className={css.sloganText}>
                    <span>Hardware</span>
                    <span>Software</span>
                    <span>Anywhere</span> 
                </div>

            <p className={css.miniText}>
            Technology Takes It To The Next Level.
            </p>

            <Link to="/products">

            <button className={`btn ${css.btn}`}>
                Get Started
            </button>
            </Link>

            </div>

            {/* right side */}
            <div className={css.right}>

                <div className={css.imageContainer}>
                    <Image src={Tech} alt="" layout="intrinsic" />
                </div>

                <div className={css.ContactUs}>
                    <span>Contact us</span>
                    <div>
                        <UilPhone color='black'/>
                    </div>
                </div>

            </div>

        </div>
        </Router>

    )
}