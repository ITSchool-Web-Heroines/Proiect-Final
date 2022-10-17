import Image from 'next/image'
import css from '../styles/Info.module.css'
import InfoPic from '../images/Info.jpg'
import Mobile from '../images/Mobile.jpg'
import {UilPhone} from '@iconscout/react-unicons'

export default function Info() {
    return(
        <div className={css.container}>
            
            {/*left side */}
            <div className={css.left}>
                <div className={css.phoneDiv}>
                    <span>The phone you always desired</span>
                    <UilPhone color='black'/>
                </div>


                <div className={css.infoText}>
                    <span>Be The Fatest</span>
                    <span>In Delivering</span>
                    <span> Your Mobile</span>

                </div>

                <span className={css.miniText}>
                Our mission is to bla bla
                </span>

                <button className="btn">
                Get Started
                </button>

            </div>   

            {/* right side */}
            <div className={css.right}>

                <div className={css.imageContainer}>
                    <Image src={InfoPic} alt="" layout="intrinsic"/>
                </div>

                <div className={css.ContactUs}>
                    <span>Contact us</span>
                    <div>
                        <UilPhone color='black'/>
                    </div>
                </div>

                <div className={css.Mobile}>
                    <div>
                    <Image src={Mobile} alt="" objectFit="cover" layout="intrinsic"/>
                    </div>

                    <div className={css.details}>
                        <p> Starting from</p>
                        <p> $499 </p>
                    </div>
                </div>


            </div>

        </div>

    )
}