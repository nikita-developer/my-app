
import logo from '../../media/img/logo.png'
import Nav from '../Nav/Nav'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className='header__logo'>
                <img src={logo} alt="Логотип"/>
            </div>
            <Nav />
        </header>
    )
}

export default Header;