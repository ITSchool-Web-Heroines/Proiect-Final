import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from '../../styles/about.module.css'
import Link from 'next/link'
import Section from "./Section";
import Image from 'next/image'
import about02 from '../images-page/about-02.jpg'
import about01 from '../images-page/about-01.jpg'
import about from '../images-page/about.jpg'

const About = () => {
    return (
        <section id="about-me">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className={`${classes.about_info}`}>
                            <Section title='Despre mine '>
                            </Section>
                            <h3> Hai sa ne cunoastem! </h3>
                            <h3> Sunt aici sa te ajut in alegerea cadoului personalizat</h3>
                            <p>La alegere se pot realiza picturi si in tehnica culorilor acrilice, tempera sau culorilor de apă.
                                De asemenea, portretul grafic sau în carbune nu este de omis.Tabloul poate fi un cadou ideal atât pentru adulți cât și pentru copii.<br />
                                Pentru orice intrebari la care nu va gasiti raspunsul pe site, contactati-ma  si va invit sa cititi cu drag fiecare pagina de pe acest site.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className={classes.about_images}>
                            <div className={classes.about_image_1}>
                                <Image src={about} width='300' height='300' />
                            </div>
                            <div className={classes.about_image_2}>
                                <Image src={about01} width='300' height='300' />
                            </div>
                            <div className={classes.about_image_3}>
                                <Image src={about02} width='300' height='300' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About