
import React from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
import './Nav.scss';

function Nav (props) {
    if(props.auth) {
        return (
            <nav className="nav">
                <NavLink to="/" className="nav__link">Главная</NavLink>
                <NavLink to="/about" className="nav__link">О нас</NavLink>
                <NavLink to="/wiki" className="nav__link">База знаний</NavLink>
            </nav>
        )
    } else {
        return (
            <nav className="nav">
                <NavLink to="/" className="nav__link">Главная</NavLink>
                <NavLink to="/login" className="nav__link">Войти</NavLink>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps) (Nav)