import React from 'react';
import './header.css';
import {Routes,Route, Link} from "react-router-dom";
import Main from "../pages/main";
import News from "../pages/news";
import Profile from "../pages/profile";
import Login from "../pages/login";

const Header = () => {
    return(
        <React.Fragment>
                <div className="header">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                    </ul>
                </div>
                <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                </Routes>
        </React.Fragment>
    );
}

export default Header;
