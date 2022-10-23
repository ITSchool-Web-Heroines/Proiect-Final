import React , {useState} from "react";
import Section from "./Section";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import classes from '../../styles/contact.module.css'
import contact_image from '../images-page/contact.jpg'

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <Image src={contact_image} height='300' width='500' />
                    </Col>
                    <Col>
                        <Section title='Formular de contact' />
                        <form onSubmit={handleSubmit}>
                            <div className= {`${classes.form_contact} mb-3 pt-0`}>
                                <input
                                    type="text"
                                    placeholder="Numele tau"
                                    name="name"
                                    className="bg-white  rounded text-sm border-0 shado  text-black"
                                    size="40"
                                />

                            </div>
                            <div className={`${classes.form_contact} mb-3 pt-0`}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="bg-white  bg-white rounded text-sm border-0 shad  text-black"
                                    size="40"
                                />
                            </div>
                            <div className={`${classes.form_contact} mb-3 pt-0`}>
                                <textarea
                                    placeholder="Mesajul tau"
                                    name="message"
                                    className="bg-white  bg-white rounded text-sm border-0 shad  text-black"
                                    rows="5" cols="50"
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <button className={`${classes.btn_active}`}
                                    type="submit">
                                    Trimite un mesaj
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Contact