import React from 'react';
import './header.css';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import Main from "../pages/main";
import News from "../pages/news";
import Profile from "../pages/profile";
import Login from "../pages/login";

const Header = () => {
    return(
           <div className="header">
               <ul>
                   <li><Link to="/">Главная</Link></li>
                   <li><Link to="/news">Новости</Link></li>
                   <li><Link to="/login">Профиль</Link></li>
               </ul>
           </div>
    );
}

export default Header;
