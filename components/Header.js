import React from "react";
import Image from "next/future/image";
import styles from "./Header.module.scss";
import Clip from  "../public/Clip.jpg";
import Cat from "../public/githubcat.png";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCog} from "@fortawesome/free-solid-svg-icons";


export default function Header() {
    return (
        <div className={styles.container1}>
            <div className={styles.header}>
                <Link href= "https://github.com" passHref>
                    <a target="_blank">
                        <Image
                            src={Cat}
                            alt="githubcat"
                            width={90}
                            height={90}
                            className={styles.cat}
                        />
                    </a>
                </Link>
            
                <div>
                    <Image
                        src={Clip}
                        alt="computerclip"
                        width={330}
                        height={230}
                        className={styles.computerImage}
                    />
                    <p>Hi, my name is</p>
                    <h1 className={styles.name}>
                        Timea Csud
                        <FontAwesomeIcon icon={faCog} className="fa-solid fa-cog fa-spin fa-2xs"></FontAwesomeIcon>
                        m
                    </h1>
                </div>
                
                <div className={styles.role}>
                    <Typewriter
                        options={{
                            strings: ["UX/UI DESIGNER", "QA ENGINEER", "FRONTEND DEVELOPER"],
                            autoStart: true,
                            skipAddStyles: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>    
        </div>
    )
}

