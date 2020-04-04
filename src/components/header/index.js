import React from 'react';

import Logo from "../common/logo";
import './header.css';

const Header = ({gotoFunctionMapping}) => {
    const headerMenu = [
        {name: 'Карта', value: 'map', id: 1},
        {name: 'Профиль', value: 'profile', id: 2},
        {name: 'Выйти', value: 'signout', id: 3}
    ];

    return (
        <header className="header">
            <Logo/>
            <ul className="header__list">
                {headerMenu.map(item => (
                    <li key={item.id} className="header__item">
                        <button
                            // href='#'
                            className="header__link"
                            onClick={gotoFunctionMapping[item.value]}
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
