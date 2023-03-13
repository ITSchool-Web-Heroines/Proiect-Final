import React from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "./Section";
import classes from '../../styles/services.module.css'
import ServicesItem from "./Servicesitem";

function Services() {
    return (
        <section id="services">
            <Row>
                <div className={`${classes.services_content}`}>
                    <Col lg='6' md='6'>
                        <div className={`${classes.services_container}d-flex`}>
                            <div>
                                <ServicesItem subtitle='Portret patruped clasic - ulei pe panza' icon='ri-artboard-line' />

                                <ServicesItem subtitle='Portret patruped digital' icon='ri-computer-line' />

                                <ServicesItem subtitle='Altele: peisaje, natura statica, etc' icon='ri-landscape-fill' />
                            </div>
                        </div>

                    </Col>
                    <Col lg='6' md='6'>
                        <div className={`${classes.services_info}`}>
                            <Section title='De ce noi?'></Section>
                            <h4> Despre noi ca echipa</h4>
                            <p>Portrete pictate, desenate sau digitale, realizate dupa fotografii.
                                Numele meu este Despina Theodora Barabas, sunt medic veterinar cu afinitate in portrete traditionale cu animale de companie, realizate dupa fotografii.<br></br>
                                Aceste lucrari artistice sunt mai mult decat simple copii ale fotografiilor, ele sunt menite sa capteze vitalitatea unica din expresia fiecarui companion in parte prin detalii, tonuri si culori care va vor incanta sufletul si atmosfera camerelor in care vor fi expuse.</p>
                        </div>
                    </Col>
                </div>
            </Row>
        </section>

    )
}

export default Services