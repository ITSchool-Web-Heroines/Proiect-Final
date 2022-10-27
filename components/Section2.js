import css from '../styles/Section2.module.css'
import Image from 'next/image'
import P1 from '../images/P1.jpg'
import P2 from '../images/P2.jpeg'
import P3 from '../images/P3.jpeg'
import P4 from '../images/P4.jpeg'

export default function Section2() {
    return(
        <div className={css.container}>
            
            {/* Devices */}

            <div className={css.card}>
            <Image className={css.image} src={P1} alt="" objectFit='cover' layout='intrinsic'/>
            <p className={css.title}>
                Iphone 14 Pro Max
            </p>
            </div>

            <div className={css.card}>
            <Image className={css.image} src={P2} alt="" objectFit='cover' layout='intrinsic'/>
            <p className={css.title}>
                Iphone 14 Pro
            </p>
            </div>

            <div className={css.card}>
            <Image className={css.image} src={P3} alt="" objectFit='cover' layout='intrinsic'/>
            <p className={css.title}>
                Iphone 14
            </p>
            </div>

            <div className={css.card}>
            <Image className={css.image} src={P4} alt="" objectFit='cover' layout='intrinsic'/>
            <p className={css.title}>
                Iphone 14 Plus
            </p>
            </div>

        </div>

    )
}