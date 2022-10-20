import React from 'react';

import { Container } from 'react-bootstrap';
import classes from './header.module.css'
import Link from "next/link"

// const NAV_LINK = [
//     {
//         path: '/',
//         display: 'Acasa'
//     },
//     {
//         path: '#proiecte',
//         display: 'Proiecte'
//     }, {
//         path: '#contact',
//         display: 'Contact'
//     },
// ]

function Header () {
    const NAV_LINK = [
        {
            path: '/',
            display: 'Acasa'
        },
        {
            path: '#proiecte',
            display: 'Proiecte'
        }, {
            path: '#contact',
            display: 'Contact'
        },
    ]

    return (
        <header className={`${classes.header}`}>
            <Container>
                <div className={`${classes.nav_wrapper}`}>


                    <div className={`${classes.logo}`}>
                        <h1><span>Pic</span>tures</h1>
                    </div>

                    <div className={`${classes.navigation}`}>
                        <div className={`${classes.nav_menu}`}>
                            {
                                NAV_LINK.map((item, index) => (
                                    <Link href={item.path} key={index}>{item.display}</Link>
                                ))

                            }
                            <div className={`${classes.nav_right}`}>
                                <p><i class="ri-paint-brush-line"></i>
                                    Despina Barabas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    

    )
};

export default Header