import React from 'react';

import Logo from "../common/logo";
import './header.css';

const Header = () => {
    const headerMenu = [
        {name: 'Карта', value: 'map', id: 1},
        {name: 'Профиль', value: 'profile', id: 2},
        {name: 'Выйти', value: 'login', id: 3}
    ];

    return (
        <header className="header">
            <Logo/>
            <ul className="header__list">
                {headerMenu.map(item => (
                    <li key={item.id} className="header__item">
                        <a
                            href={item.value}
                            className="header__link"
                            onClick='#'
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
