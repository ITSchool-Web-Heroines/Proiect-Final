import React from "react";
import { Container, Row, Col } from "reactstrap"
import classes from './footer.module.css'
import Link from 'next/link'


const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <Container>
            <Row>
                <Col>
                    <div className={`${classes.nav_menu}`}>

                    </div>
                </Col>
                <Col>
                    <div className={`${classes.footer_subchild}`}>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Gmail</p>
                    </div>
                    <div className={`${classes.footer_principal}`}>
                        <h4> &copy; Copyright Alexandra {year} </h4>
                    </div>
                </Col>
            </Row>
        </Container>
           
    )
}

export default Footer