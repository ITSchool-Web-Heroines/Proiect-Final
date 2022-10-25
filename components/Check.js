import css from '../styles/Check.module.css'
import Image from 'next/image'
import C1 from '../images/C1.jpg'


export default function Check () {
    return(
        <div className={css.card}>
            <form
            name="contact"
            action="/pages/success"
            method="POST"
            data-netlify="true"> 
            </form>
        <Image src={C1} alt=""/>
            <div className={css.container}>
                <h4><b>Thanks for filling out our form!</b></h4>
            </div>
    </div>

    )
}