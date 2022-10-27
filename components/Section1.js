import css from '../styles/Section1.module.css'
import Image from 'next/image'
import M1 from '../images/M1.jpg'
import M2 from '../images/M2.jpg'
import M3 from '../images/M3.jpg'
import M4 from '../images/M4.jpg'

export default function Section1() {
    return(
        <>
        <div className={css.heading}>
            <p>Our products</p>

        </div>

        {/* features */}
        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={M1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>MacBook Pro 14” and 16"</p>
                <p>From $1999</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={M2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>MacBook Pro 13”</p>
                <p>From $1299</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={M3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>MacBook Air with M2 chip</p>
                <p>From $1199</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={M4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>MacBook Air with M1 chip</p>
                <p>From $999</p>
            </div>


        </div>
        </>
    )
}