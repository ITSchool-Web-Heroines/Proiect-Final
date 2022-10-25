import React, { useRef } from "react";
import Section from "./Section";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import classes from '../../styles/contact.module.css'
import contact_image from '../images-page/contact.jpg'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        let Name = document.getElementById('name');
        let email = document.getElementById('email');
        let msg = document.getElementById('message')
        const succes = document.getElementById('succes')
        const danger = document.getElementById('danger')

        emailjs.sendForm(
            'service_tf744cl',
            'template_e80uwfg',
            form.current,
            'jHmmhU2HjFMvw6NuE')
            
            .then((result) => {
                console.log(result.text);
                setTimeout((e) => {
                    Name.value = '';
                    email.value = '';
                    msg.value = '';
                }, 5000);
                return succes.style.display = 'block';

            }, (error) => {
                console.log(error.text);
                return danger.style.display = 'none';
            });

        setTimeout((e) => {
            danger.style.display = 'none';
            succes.style.display = 'none';
        }, 5000)
    };

    // function sendMessage(e) {
    //     e.preventDefault();
    //     let Name = document.getElementById('name');
    //     let email = document.getElementById('email');
    //     let msg = document.getElementById('message')
    //     const succes = document.getElementById('succes')
    //     const danger = document.getElementById('danger')

    //     if (Name.value === '' || email.value === '' || msg.value === '') {
    //         return danger.style.display = 'block';
    //     }
    //     else {
    //         setTimeout((e) => {
    //             Name.value = '';
    //             email.value = '';
    //             msg.value = '';
    //         }, 5000);

    //         succes.style.display = 'block';
    //     }

    //     setTimeout((e) => {
    //         danger.style.display = 'none';
    //         succes.style.display = 'none';
    //     }, 5000)

    // }

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col>
                        <div className={`${classes.form}`}>
                            <Col lg='6' md='6'>
                                <div className={`${classes.image}`}>
                                    <Image src={contact_image} height='350' width='500' />
                                </div>
                            </Col>
                            <Col lg='6'>
                                <div className={`${classes.form_contact}`}>
                                    <Section title='Formular de contact' />
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="mb-3 pt-0">
                                            <label className="text-white">Nume</label>
                                            <input
                                                type="text"
                                                placeholder="Numele tau"
                                                id="name"
                                                name="user_name"
                                                className="bg-white  rounded text-sm border-0 shado  text-black"
                                                size="40"
                                                minLength="10"
                                                maxLength="20"
                                            />

                                        </div>
                                        <div className={`${classes.form_contact} mb-3 pt-0`}>
                                            <label className="text-white">Mail</label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                name="user_email"
                                                required
                                                className="bg-white  bg-white rounded text-sm border-0 shad  text-black"
                                                size="40"
                                                minLength="10"
                                                maxLength="25"
                                            />
                                        </div>
                                        <div className={`${classes.form_contact} mb-3 pt-0`}>
                                            <label className="text-white">Mesajul tau</label>
                                            <textarea
                                                placeholder="Mesajul tau"
                                                name="message"
                                                required
                                                id="message"
                                                className="bg-white  bg-white rounded text-sm border-0 shad  text-black"
                                                rows="5" cols="50"
                                                minLength="10"
                                                maxLength="400"
                                            />
                                        </div>
                                        <div className="mb-3 pt-0">
                                            <button className={`${classes.btn_active}`}
                                                type="submit">
                                                Trimite un mesaj
                                            </button>
                                        </div>
                                        <div className="message-form">
                                            <div className={classes.succes} id="succes"> Mesajul a fost trimis cu succes</div>
                                            <div className={classes.danger} id="danger">Campurile sunt obligatorii</div>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Contact