import React from 'react';

import Logo from "../common/logo";
import './header.css';

const Header = ({gotoFunctionMapping}) => {
    const headerMenu = [
        {name: 'Карта', id: 'map'},
        {name: 'Профиль', id: 'profile'},
        {name: 'Выйти', id: 'signout'}
    ];

    return (
        <header className="header">
            <Logo/>
            <ul className="header__list">
                {headerMenu.map(item => (
                    <li key={item.id} className="header__item">
                        <button
                            className="header__link"
                            onClick={gotoFunctionMapping[item.id]}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
