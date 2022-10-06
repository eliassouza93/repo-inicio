import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";



function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Projetos',
        to: '/projetos'
    }, {
        label: 'Sobre',
        to: './sobre'
    }, {
        label: 'Contato',
        to: './contato'

    }]
    return (
        <nav className="nav">
            <div  className="nav__brand">
                LOGO TELA INCIAL
            </div>
            <ul className={active}>
                {rotas.map((rota, index) => (
                    <li key={index} className="nav__item">

                        <Link onClick={navToggle} className="nav__link" to={rota.to}> {rota.label} </Link>

                    </li>
                ))}
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
