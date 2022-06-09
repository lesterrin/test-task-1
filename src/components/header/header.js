import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Профиль</a></li>
            </ul>
        </div>
    );
}

export default Header;
