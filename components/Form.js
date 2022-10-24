import css from "../styles/Form.module.css";

const Form = () => {
    return (
        <div className={css.containter}>
            <div className={css.contact}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone Number'/>
                <input type="text" placeholder='Subject'/>
                <input type="text" placeholder='Details'/>
                <button type>Submit</button>
            </div>
        </div>
    )
}

export default Form
