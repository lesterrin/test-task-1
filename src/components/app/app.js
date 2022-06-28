import React, {useState} from 'react';
import Header from '../header';
import Main from "../pages/main";
import Login from "../pages/login";
import Profile from "../pages/profile";
import News from "../pages/news"
import {Route, Routes} from "react-router-dom";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            </Routes>
        </React.Fragment>
    );
}

export default App;

