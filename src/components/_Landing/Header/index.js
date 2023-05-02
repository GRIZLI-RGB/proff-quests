import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="/img/header/logo.svg" alt="Logo" />
            <ul className="header__menu">
                <li className="header__menu-item">
                    <a href="#about-project">О проекте</a>
                </li>
                <li className="header__menu-item">
                    <a href="#for-students">Для обучающихся</a>
                </li>
                <li className="header__menu-item">
                    <a href="#for-organizations">Для организаций</a>
                </li>
                <a className="header__menu-btn" href="/auth">
                    К тестированию
                </a>
            </ul>
        </header>
    );
}

export default Header;
