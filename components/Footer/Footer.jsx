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
                
                    <ul className={`${classes.footer_subchild}`}>
                        <li><i class="ri-instagram-line"></i>Instagram</li>
                        <li> <i class="ri-messenger-fill"></i> Facebook</li>
                        <li><i class="ri-mail-send-line"></i>Gmail</li>
                    </ul>
                    <div className={`${classes.footer_principal}`}>
                        <h4> &copy; Copyright Alexandra {year} </h4>
                    </div>
            </Row>
        </Container>

    )
}

export default Footer