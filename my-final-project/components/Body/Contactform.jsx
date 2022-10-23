import React from "react";
import Section from "./Section";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const Contact = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                    <Section title='Formular de contact' />
                        <form>
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    className="bg-white"
                                    size="40"
                                    />

                            </div>
                            <div className="mb-3 pt-0">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="bg-white"
                                    size="40"
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    className="bg-white"
                                    rows="5" cols="50"
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <button type="submit">
                                    Send a message
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Contact