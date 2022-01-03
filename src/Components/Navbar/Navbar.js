import React, { useState } from 'react'
import { Link } from "react-scroll";
import { v4 as uuidv4 } from 'uuid'
import './Navbar.css'

export default function Navbar() {

    const [navbar, setNavbar] = useState(false)

    const navBarChange = () => {
        if (window.scrollY >= 64) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', navBarChange)

    const [toggle, setToggle] = useState(false)

    const toggleNavMenu = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div id="haut"></div>
            <nav className={navbar ? 'w-full fixed navBarActive' : 'navBarNotActive w-full fixed'} style={{ zIndex: 1000 }}>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button className='btnMenuMobile' onClick={toggleNavMenu}>
                                {toggle ?
                                    <svg xmlns="http://www.w3.org/2000/svg" height={36} width={36} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" height={36} width={36} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>}
                            </button>
                        </div>
                        {(toggle) &&
                            <div className='leftMenuMobile'>
                                <ul>
                                    <li>
                                        <Link
                                            onClick={toggleNavMenu}
                                            to='haut'
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500} 
                                            key={uuidv4()}
                                        >
                                            Accueil
                                        </Link>
                                    </li>
                                    <hr className='borderMenuMobile'/>
                                    <li>
                                        <Link
                                            onClick={toggleNavMenu}
                                            to='propos'
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500} 
                                            key={uuidv4()}
                                        >
                                            A propos
                                        </Link>
                                    </li>
                                    <hr className='borderMenuMobile'/>
                                    <li>
                                        <Link
                                            onClick={toggleNavMenu}
                                            to='presta'
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500} 
                                            key={uuidv4()}
                                        >
                                            Prestations
                                        </Link>
                                    </li>
                                    <hr className='borderMenuMobile'/>
                                    <li>
                                        <Link
                                            onClick={toggleNavMenu}
                                            to='contact'
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500} 
                                            key={uuidv4()}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={toggleNavMenu}
                                            to='infos'
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={500} 
                                            key={uuidv4()}
                                        >
                                            Informations
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }
                        <div className="flex-1 flex items-center justify-center">
                            <div className="hidden sm:block">
                                <div className="flex space-x-6 text-white">
                                    <Link
                                        to="haut"
                                        activeClass="navActive"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}                                    
                                        key={uuidv4()}>
                                        <span style={{ fontSize: 18, cursor:'pointer' }}>Accueil</span>
                                    </Link>
                                    <Link
                                        to="propos"
                                        activeClass="navActive"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500} 
                                        key={uuidv4()}>
                                        <span style={{ fontSize: 18, cursor:'pointer' }}>A propos</span>
                                    </Link>
                                    <Link
                                        to="presta"
                                        activeClass="navActive"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500} 
                                        key={uuidv4()}>
                                        <span style={{ fontSize: 18, cursor:'pointer' }}>Prestations</span>
                                    </Link>
                                    <Link
                                        to="contact"
                                        activeClass="navActive"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500} 
                                        key={uuidv4()}>
                                        <span style={{ fontSize: 18, cursor:'pointer' }}>Contact</span>
                                    </Link>
                                    <Link
                                        to="infos"
                                        activeClass="navActive"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500} 
                                        key={uuidv4()}>
                                        <span style={{ fontSize: 18, cursor:'pointer' }}>Informations</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
