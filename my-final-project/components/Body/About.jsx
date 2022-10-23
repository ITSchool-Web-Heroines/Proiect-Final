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
                        <Section title='Despre mine '>
                        </Section>
                        <h3> Hai sa ne cunoastem! </h3>
                        <h3> Sunt aici sa te ajut in alegerea cadoului personalizat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa erat. Maecenas porttitor elementum ante ac consequat. Fusce pretium velit sit amet arcu ornare blandit. Pellentesque venenatis vel arcu sit amet congue. Mauris quis sagittis mi, eu tincidunt dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In quis arcu pretium, ornare sapien ut, porttitor turpis.</p>
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