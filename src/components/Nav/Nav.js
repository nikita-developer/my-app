
import React, {Component} from "react";
import {NavLink} from "react-router-dom"
import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink to="/" className="nav__link">Главная</NavLink>
                <NavLink to="/about" className="nav__link">О нас</NavLink>
                <NavLink to="/wiki" className="nav__link">База знаний</NavLink>
            </nav>
        )
    }
}

export default Nav