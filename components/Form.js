import css from '../styles/Form.module.css'

export default function Form() {
    return(
        <div className={css.container}>

            <div className={css.contact}>
                
                <div className={css.left}></div>
                <div className={css.right}>
                    <p class="title">Contact Us</p>
                    <input type="email" class="field" placeholder="Your Email"/>
                    <input type="email" class="field" placeholder="Your Email"/>
                    <input type="text" class="field" placeholder="Your Phone"/>
                    <textarea class="field" placeholder="Message"></textarea>
                </div>
            </div>
        </div>
    )
}