import css from "../styles/Form.module.css"

const Form = () => {
    return (
        <div className={css.container}>
            <div className={css.contact}>
                <div className={css.right}>
                    <h2>Contact Us</h2>
                    <form name="contact" method="POST" data-netlify="true" onSubmit="submit" action="success" data-netlify-honeypot="bot-field">
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
	        </div>
	    </div>
    )
}

export default Form
