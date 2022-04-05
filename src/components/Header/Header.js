
import React from "react"
import Nav from "../Nav/Nav"
import Logo from "../Logo/Logo"
import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <div className="header__nav">
                <Nav />
            </div>
        </header>
    )
}
