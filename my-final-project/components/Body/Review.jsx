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
        autoplay:true,
        autoplaySpeed:5000,
        swipeToSlide:true,
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
                        <Section title='Ce spun clientii' />

                        <Slider {...settings} className={`${classes.slider_review}`}>
                            <div>
                                <h6>Maria Popescu</h6>
                                <p>Doamne feri, cel mai frumos cadou ever, I can not even</p>
                            </div>
                            <div>
                                <h6>Maria Popescu</h6>
                                <p>Doamne feri, cel mai frumos cadou ever, I can not even</p>
                            </div>
                            <div>
                                <h6>Maria Popescu</h6>
                                <p>Doamne feri, cel mai frumos cadou ever, I can not even</p>
                            </div>
                            <div>
                                <h6>Maria Popescu</h6>
                                <p>Doamne feri, cel mai frumos cadou ever, I can not even</p>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg='5' md='4'>
                        <Image src={Reviews} height='300' width='500' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Review