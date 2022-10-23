import css from '../styles/Section1.module.css'
import Image from 'next/image'
import M1 from '../images/M1.jpg'
import M2 from '../images/M2.jpg'
import M3 from '../images/M3.jpg'
import M4 from '../images/M4.jpg'
import I1 from '../images/Products/I1.jpeg'
import I2 from '../images/Products/I2.png'
import I3 from '../images/Products/I3.png'
import I4 from '../images/Products/I4.png'
import P1 from '../images/Products/P1.jpg'
import P2 from '../images/Products/P2.jpeg'
import P3 from '../images/Products/P3.jpeg'
import P4 from '../images/Products/P4.jpeg'
import P5 from '../images/Products/P5.jpeg'
import P6 from '../images/Products/P6.jpeg'
import P7 from '../images/Products/P7.jpeg'
import P8 from '../images/Products/P8.jpeg'
import W1 from '../images/Products/W1.jpeg'
import W2 from '../images/Products/W2.jpeg'
import W3 from '../images/Products/W3.jpeg'
import W4 from '../images/Products/W4.jpeg'
import A1 from '../images/Products/A1.jpeg'
import A2 from '../images/Products/A2.jpeg'
import A3 from '../images/Products/A3.jpeg'
import A4 from '../images/Products/A4.png'
import T1 from '../images/Products/T1.jpeg'
import T2 from '../images/Products/T2.jpeg'
import T3 from '../images/Products/T3.jpeg'
import T4 from '../images/Products/T4.jpeg'

import React from 'react';  
   

export default function Products() {
    return(
        <>
        <div className={css.heading}>
            <p>MacBooks</p>
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

        <div className={css.heading}>
            <p>iPads</p>
        </div>

        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={I1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPad Pro</p>
                <p>From $799</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={I2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPad Air</p>
                <p>From $599</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={I3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPad</p>
                <p>From $449</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={I4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPad mini</p>
                <p>From $499</p>
            </div>

        </div>

        <div className={css.heading}>
            <p>iPhone</p>

        </div>

        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={P1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone 14 Pro Max</p>
                <p>From $1099</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={P2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone Pro</p>
                <p>From $999</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={P3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone 14 Plus</p>
                <p>From $899</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={P4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone 14</p>
                <p>From $799</p>
            </div>

        </div>

        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={P5} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone 13</p>
                <p>From $699</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={P6} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone 13 mini</p>
                <p>From $599</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={P7} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone 12</p>
                <p>From $599</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={P8} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>iPhone SE</p>
                <p>From $429</p>
            </div>

        </div>

        <div className={css.heading}>
            <p>Watches</p>

        </div>

        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={W1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Apple Watch Series 8</p>
                <p>From $399</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={W2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Apple Watch Ultra</p>
                <p>From $799</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={W3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Apple Watch SE</p>
                <p>From $249</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={W4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Apple Watch Hermès</p>
                <p>From $1,409</p>
            </div>

        </div>

        <div className={css.heading}>
            <p>AirPods</p>

        </div>

        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={A1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>AirPods (2nd generation)</p>
                <p>From $129</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={A2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>AirPods (3rd generation)</p>
                <p>From $179</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={A3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>AirPods Pro (2nd generation)</p>
                <p>From $249</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={A4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>AirPods Max</p>
                <p>From $549</p>
            </div>

        </div>

        <div className={css.heading}>
            <p>TV & Home</p>
        </div>

        <div className={css.services}>
            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={T1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Apple TV 4K</p>
                <p>From $129</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={T2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>HomePod mini</p>
                <p>From $99</p>
            
            
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={T3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Magic Keyboard Folio</p>
                <p>From $249</p>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={T4} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <p>Apple Pencil</p>
                <p>From $129</p>
            </div>

        </div>

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