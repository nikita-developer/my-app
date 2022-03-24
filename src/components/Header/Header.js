
import React from "react"
import Nav from "../Nav/Nav"
import Logo from "../Logo/Logo"
import './Header.scss'
import BtnLogIn from "../Authorization/BtnLogIn"
import BtnRegistration from "../Authorization/BtnRegistration"
import BtnExit from "../Authorization/BtnExit"
// import Context from "../../context" 

export default function Header() {
    // const {authorization} = useContext(Context)
    return (
        <header className="header">
            <Logo />
            <div className="header__nav">
                <Nav />
            </div>
            <div className="header__authorization">
                <BtnLogIn />
                <BtnRegistration />
                <BtnExit />
            </div>
        </header>
    )
}
