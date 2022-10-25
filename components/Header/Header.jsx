import React from 'react';
import { useRef } from 'react';
import { Container } from 'reactstrap';
import classes from './header.module.css'
import Link from "next/link"
import { useEffect } from 'react';

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

const Header = () => {

    const headerRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRef.current.classList.add(`${classes.header__shrink}`)
        } else {
            headerRef.current.classList.remove(`${classes.header__shrink}`)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc)

        return () => window.removeEventListener('scroll', headerFunc)
    })

    const NAV_LINK = [
        {
            path: '/',
            display: 'Acasa'
        },
        {
            path:'#about-me',
            display:'Despre'
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
        <header className={`${classes.header}`} ref={headerRef}>
            <Container>
                <div className={`${classes.nav_wrapper}`}>


                    <div className={`${classes.logo}`}>
                        <h1><span>Abby Despina</span> ART</h1>
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