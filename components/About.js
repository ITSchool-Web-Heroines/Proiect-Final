import React from "react";
import Image from "next/future/image";
import Me from "../public/me.jpg";
import styles from "./About.module.scss";
import Card from 'react-bootstrap/Card';
import {AiFillApple, AiFillWindows, AiFillAndroid} from  "react-icons/ai";
import aboutme from "./data/aboutme"
import {FcBusinesswoman} from "react-icons/fc";

export default function About() {
    return (
        <div>
            <h2>About me</h2>
            <div className={styles.photocard}>
                
                <Image 
                    src={Me}
                    alt="me"
                    width={300}
                    height={340}
                    className={styles.me}
                    
                />
                <Card className={styles.introduction}>
                    <Card.Header className={styles.cardheader}><AiFillAndroid/><AiFillApple/><AiFillWindows/></Card.Header>
                    <Card.Body>
                        <div className={styles.cardcontext}>
                            <FcBusinesswoman/>
                            {aboutme.map((me) => 
                            <p key={me}>{me}</p>
                        )}
                        </div>
                      
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}