import React from "react";
import { Container, Row, Col } from "reactstrap"
import classes from './footer.module.css'
import Link from "next/link";



const Footer= () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <div className={`${classes.nav_menu}`}>

                    </div>
                </Col>
                <Col>
                    <div className={`${classes.footer_subchild}`}>
                        <p><i class="ri-instagram-line"></i>Instagram</p>
                        <p> <i class="ri-messenger-fill"></i> Facebook</p>
                        <p><i class="ri-mail-send-line"></i>Gmail</p>
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