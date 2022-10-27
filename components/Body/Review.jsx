import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import Section from "./Section";
import Reviews from '../images-page/pareri.jpg'
import Slider from 'react-slick';
import classes from '../../styles/reviews.module.css'

const Review = () => {

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='6'>
                        <div className={`${classes.review_info}`}>
                            <Section title='Ce spun clientii' />

                            <Slider {...settings} className={`${classes.slider_review}`}>
                                <div>
                                    <h6>Maria Popescu</h6>
                                    <p>Pe Despina am cunoscut-o prin prisma unui eveniment tragic din viata mea: mi-a murit primul meu caine - un cocker de 14 ani! An cautat sa-mi fac un tablou - o amintire deosebita pentru sufletul meu! Asa am gasit-o pe Despina si ea mi-a pictat un tablou portret si a redat exact ce reprezenta Paco pentru mine: culoare, emotie, iubire.</p>
                                </div>
                                <div>
                                    <h6>Maria Popescu</h6>
                                    <p>Din dorinta de a imortaliza imaginea catelului meu, am apelat la Despina, care a reusit cu succes sa transpuna pe panza realitatea compusa atat din caracteristici fizice cat si emotii. Rezultatul colaborarii noastre a fost un tablou frumos.</p>
                                </div>
                                <div>
                                    <h6>Maria Popescu</h6>
                                    <p>Foarte fain ii , seamana fix cu el , ia uite ce bine ii sta langa tablou</p>
                                </div>
                                <div>
                                    <h6>Maria Popescu</h6>
                                    <p>Doamne feri, cel mai frumos cadou ever, I can not even</p>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col lg='5' md='4'>
                        <div className={`${classes.review_image}`}>
                            <Image src={Reviews} height='300' width='500' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Review