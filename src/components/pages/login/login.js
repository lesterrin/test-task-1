import React, {useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import auth from "../../../services/auth";

const Login = ({isLoggedIn, setIsLoggedIn}) => {

    const navigate = useNavigate();

    const authorisation = () => {
        let username = document.querySelectorAll('input[name=username]')[0].value;
        let password = document.querySelectorAll('input[name=pass]')[0].value;
        let isAuth = auth(username,password);
        if (isAuth){
            setIsLoggedIn(true);
        }
        else{
            console.log('Ошибка');
        }
    }

    //необходимо переписать так, чтобы страница не рендерилась, если пользователь залогинен
    useEffect(() => {
        if(isLoggedIn){
            navigate('/profile');
        }
    });


    return(
        <div>
            <h1>login page</h1>
            <div className="form">
                <label htmlFor="username"><b>User name</b></label>
                <input type="text" name="username"/>
                <br/>
                <br/>
                <label htmlFor="pass"><b>Password</b></label>
                <input type="password" name="pass"/>
                <br/>
                <br/>
                <button onClick={() => authorisation()}>Login</button>
            </div>
        </div>
    );
}
export default Login;
