import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "./Section";
import classes from "../../styles/projects.module.css"
import Projectsitem from "./Projectsitem";
import images from "../data-images";

const Projects = () => {

    const [filter, setFilter] = useState('Pensula')
    const [data, setData] = useState()

    useEffect(() => {
        if (filter === 'Pensula') {
            const filteredData = images.filter(item => item.category === filter);
            setData(filteredData)
        }

        if (filter === 'Creion') {
            const filteredData = images.filter(item => item.category === filter);
            setData(filteredData)
        }
    }, [filter]);
    return (
        <section id="projects">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <Section title='Proiecte finalizate' />
                        <h4> Unele dintre cele mai ample picturi realizate</h4>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="project_text text-center">
                            <button className={`${classes.tab_btn_active}`}
                                onClick={() => setFilter('Pensula')
                                }
                            > Pagina 1 </button>
                            <button className={`${classes.tab_btn_inactive}`}
                                onClick={() => setFilter('Creion')}
                                    > Pagina 2 </button>
                    </div>
                </Col>
                {
                    data?.map((item) => (
                        <Col lg='4' md='3' key={item.id}>
                            <Projectsitem item={item} />
                        </Col>
                    ))}
            </Row>
        </Container>
        </section >
    )
}

export default Projects