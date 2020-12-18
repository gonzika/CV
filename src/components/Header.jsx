import './css/Header.css';
import logo from "./logo192.png";

function Header() {
    return (
        <header className="header">
            <img className='header__logo' src={logo} alt="logo" />
            <h1>CV Якименко Николай</h1>
            <img className='header__logo header__logo--right' src={logo} alt="logo" />
        </header>
    )
}

export default Header;