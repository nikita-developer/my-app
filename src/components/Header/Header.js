
import React, {Component} from "react";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <div className="header__nav">
                    <Nav />
                </div>
            </header>
        )
    }
}

export default Header