import React from "react";
import { Container,Row,Col } from "reactstrap";
import Section from "./Section";
import classes from "../../styles/projects.module.css"
import Projectsitem from "./Projectsitem";

import proiectlink from "../data-images";

const Projects = () => {
    return (
        <section id ="projects">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <Section title ='Proiecte finalizate'/>
                        <h4> Unele dintre cele mai ample picturi realizate</h4>
                    </Col>
                    <Col lg ='6' md='6'>
                            <div className="project_text text-center">
                                <button className={`${classes.tab_btn_active}`}> Pagina 1 </button>
                                <button className="secondary__btn text-white"> Pagina 2 </button>
                                <Projectsitem></Projectsitem>
                            </div>
                    </Col>

                    {
                        proiectlink.map(item => (
                            <Col lg='6'md='6' key={item.id}>
                                <Projectsitem item ={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Projects