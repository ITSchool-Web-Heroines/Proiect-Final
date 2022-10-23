import React from 'react'
import Section from './Section';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import bgImg from '../images-page/bg.jpg';
import classes from '../../styles/section.module.css'



function Body() {
    return (

        <section className={`${classes.body}`}>
            <Container>
                <Row>
                    {/*  */}
                    <Col lg='6' md='6'>
                        <div className={`${classes.body_image} d-flex align-items-center gap-3`}>
                            <Image alt="" src={bgImg} width='400' height='400' />
                        </div>
                        <div className={`${classes.body_skills}`}>
                            <span><i class="ri-brush-line"></i></span>
                            <h5>Experienta</h5>
                            <h5>De peste 9 ani in pictura</h5>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className={`${classes.body_content}`}>
                            <Section title="Salut!" />
                            <h2>Despre artist</h2>
                            <p>Portrete personalizate pentru patrupezi - se adresează tuturor celor care doresc să dăruiască un cadou original si unic persoanelor dragi.
                                Pictura in ulei dateaza cu mii de ani in urma. <br></br>
                                Reprezentarea picturii clasice s-a realizat mai ales asupra marilor personalități ale vremurilor trecute. Portretele au fost si vor ramane mereu  capodopere unice de artă.</p>
                        </div>
                        {/* <div className={`${classes.body_button}`}><button>Proiectele mele</button></div> */}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Body