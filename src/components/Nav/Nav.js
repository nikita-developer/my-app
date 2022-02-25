
import {Link, Outlet} from "react-router-dom"

import './Nav.css'

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__body">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
            <Outlet />
        </nav>
    )
}

export default Nav
