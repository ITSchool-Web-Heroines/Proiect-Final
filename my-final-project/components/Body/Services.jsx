import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Section from "./Section";
import classes from '../../styles/services.module.css'
import ServicesItem from "./Servicesitem";
const Services = () => {
    return (
        <section id="services">
            <Row>
                {/*  */}
                <Col lg='6' md='6'>
                    <div className={`${classes.services_container}d-flex align-items-center gap-3`}>
                        <div>
                            <ServicesItem subtitle='Lorem ipsum lore ipsum' icon='ri-artboard-line' />

                            <ServicesItem subtitle='Lorem ipsum lore ispum' icon='ri-artboard-line' />

                            <ServicesItem subtitle='Lorem ipsum lore ipsum' icon='ri-artboard-line' />
                        </div>
                        <ServicesItem subtitle='Lorem ipsum lore ipsum' icon='ri-artboard-line' />
                    </div>

                </Col>
                <Col lg='6' md='6'>
                </Col>
            </Row>
        </section>
    )
}

export default Services