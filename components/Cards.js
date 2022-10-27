import Image from "next/future/image";
import Link from "next/link";
import React, { useState } from 'react';
import {Card, Modal, Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FiGithub} from "react-icons/fi";
import styles from "./Cards.module.scss"


export default function ProjectItem({project}) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <div>
            <div className={styles.box}>
                <Card className={styles.cards} >
                    <div onClick={handleShow} className={styles.card} >
                        <Card.Img
                            width={"500px"}
                            src={project.image}
                            alt={project.title}
                            className={styles.img}
                        />
                        <p className={styles.year}>{project.year}</p>
                        <Card.Body className={styles.body}>
                            <h5 className={styles.title}>{project.title}</h5>
                            <p className={styles.text}>{project.read}</p>
                        </Card.Body>
                    </div>
                </Card>
            </div>

            <Modal 
                show={show} 
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                className={styles.modalbox}
            >

            <Modal.Header 
                closeButton 
                className={styles.modal}
            />

            <Modal.Body className={styles.modalbody}>
                <Carousel  className={styles.carousel} interval={5000}>
                    <Carousel.Item className={styles.images}>
                        <Image
                            className={styles.carouselimg}
                            src={project.image}
                            alt={project.title}
                            width={288}
                            height={288}
                        />
        
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className={styles.carouselimg}
                            src={project.pic1}
                            alt={project.title}
                            width={288}
                            height={288}
                            
                        />
                    </Carousel.Item>
                </Carousel>
            
                
                <Modal.Title className={styles.modaltitle}>
                    
                    {project.title}
                    <Link href= {project.link} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon 
                                icon={faUpRightFromSquare} 
                                className={styles.icon}
                            />
                            
                        </a>
                    </Link>
                </Modal.Title>
                <p className={styles.aboutproject}>{project.text}</p>
            </Modal.Body>
            <Modal.Footer className={styles.modal}>
            <a href="https://github.com" target="_blank">
                    <FiGithub className={styles.icon2} />
                </a>
            </Modal.Footer>
            </Modal>
        </div>
    )
}