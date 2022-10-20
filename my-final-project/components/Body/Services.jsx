import React from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "./Section";
import classes from '../../styles/services.module.css'
import ServicesItem from "./Servicesitem";

function Services() {
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
                    </div>

                </Col>
                <Col lg='6' md='6'>
                    <Section title='De ce noi?'></Section>
                    <h4> Despre noi ca echipa</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa erat. Maecenas porttitor elementum ante ac consequat. Fusce pretium velit sit amet arcu ornare blandit. Pellentesque venenatis vel arcu sit amet congue. Mauris quis sagittis mi, eu tincidunt dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In quis arcu pretium, ornare sapien ut, porttitor turpis.</p>

                </Col>
            </Row>
        </section>

    )
}

export default Services