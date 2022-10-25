import React, { useState } from "react";
import Section from "./Section";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import classes from '../../styles/contact.module.css'
import contact_image from '../images-page/contact.jpg'

const Contact = () => {
    function sendMessage(e) {
        e.preventDefault()
        let Name = document.getElementById('name');
        let email = document.getElementById('email');
        let msg = document.getElementById('message')
        const succes = document.getElementById('succes')
        const danger = document.getElementById('danger')

        if (Name.value === '' || email.value === '' || msg.value === '') {
            return danger.style.display = 'block';
        }
        else {
            setTimeout((e) => {
                Name.value = '';
                email.value = '';
                msg.value = '';
            }, 5000);

            succes.style.display = 'block';
        }

        setTimeout((e) => {
            danger.style.display = 'none';
            succes.style.display = 'none';
        }, 5000)

    }


    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col>
                        <div className={`${classes.form}`}>
                            <Col lg ='6' md ='6'>
                                <div className={`${classes.image}`}>
                                <Image src={contact_image} height='350' width='500' />
                                </div>
                            </Col>
                            <Col lg ='6'>
                                <div className={`${classes.form_contact}`}>
                                    <Section title='Formular de contact' />
                                    <form>
                                        <div className="mb-3 pt-0">
                                            <input
                                                type="text"
                                                placeholder="Numele tau"
                                                id="name"
                                                name="name"
                                                className="bg-white  rounded text-sm border-0 shado  text-black"
                                                size="40"
                                            />

                                        </div>
                                        <div className={`${classes.form_contact} mb-3 pt-0`}>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                name="email"
                                                className="bg-white  bg-white rounded text-sm border-0 shad  text-black"
                                                size="40"
                                            />
                                        </div>
                                        <div className={`${classes.form_contact} mb-3 pt-0`}>
                                            <textarea
                                                placeholder="Mesajul tau"
                                                name="message"
                                                id="message"
                                                className="bg-white  bg-white rounded text-sm border-0 shad  text-black"
                                                rows="5" cols="50"
                                            />
                                        </div>
                                        <div className="mb-3 pt-0">
                                            <button className={`${classes.btn_active}`}
                                                type="button" onClick={sendMessage}>
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