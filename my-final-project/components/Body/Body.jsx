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
                            <h5>De peste 6 ani in pictura</h5>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className={`${classes.body_content}`}>
                            <Section title="Bine ai venit pe pagina mea!" />
                            <h2>Lorem ipsum</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum vel lectus ac placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ipsum ornare, posuere leo vel, maximus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rhoncus et nibh sed sagittis. Nunc purus eros, dictum sed nulla eget, elementum consequat quam. Maecenas leo sapien, fringilla gravida fringilla in, ornare quis lorem. Integer vulputate velit id nunc volutpat, mollis scelerisque libero pharetra.</h4>
                        </div>
                        <div className={`${classes.body_button}`}><button>Proiectele mele</button></div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Body