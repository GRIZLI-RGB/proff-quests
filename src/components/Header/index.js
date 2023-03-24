import { useEffect } from "react";
import touchmyripple from "touchmyripple";
import "./Header.scss";

function Header() {
    useEffect(() => {
        touchmyripple.init({
            color: 'rgba(255, 255, 255, 0.5)',
            eventListener: 'touchstart'
        });
        
        touchmyripple.attachToSelectors({
            selectors: '.header__menu-btn',
            color: 'rgba(255, 255, 255, 0.5)',
            eventListener: 'mousedown'
        });
    }, [])

    return (
        <header className="header">
            <img className="header__logo" src="/img/header/logo.svg" alt="Logo" />
            <ul className="header__menu">
                <li className="header__menu-item">
                    <a href="#">О проекте</a>
                </li>
                <li className="header__menu-item">
                    <a href="#">Для обучающихся</a>
                </li>
                <li className="header__menu-item">
                    <a href="#">Для организаций</a>
                </li>
                <li className="header__menu-btn">К тестированию</li>
            </ul>
        </header>
    );
}

export default Header;
