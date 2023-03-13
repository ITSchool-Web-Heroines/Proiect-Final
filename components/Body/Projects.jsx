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
        <section id="proiecte">
            <Container>
                <Row>
                    <div className={`${classes.project_box}`}>
                        <Col lg='6' md='6'>
                            <Section title='Proiecte finalizate' />
                            <h4> Unele dintre cele mai ample picturi realizate</h4>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className={`${classes.buttons}`}>
                                <button className={`${classes.tab_btn_active}`}
                                    onClick={() => setFilter('Pensula')
                                    }
                                > Pagina 1 </button>
                                <button className={`${classes.tab_btn_inactive}`}
                                    onClick={() => setFilter('Creion')}
                                > Pagina 2 </button>
                            </div>
                        </Col>
                        <div className={`${classes.project_photo}`}>
                            {
                                data?.map((item) => (
                                    <Col lg='4' md='3' key={item.id}>
                                        <Projectsitem item={item} />
                                    </Col>
                                ))}
                        </div>
                    </div>
                </Row>
            </Container>
        </section >
    )
}

export default Projects