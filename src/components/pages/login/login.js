import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import authService from "../../../services/auth-service";
import store from '../../../store';

const Login = ({isLoggedIn, setIsLoggedIn}) => {

    store.dispatch({
        type:'LOG_IN'
    })

    let some = store.getState();

    console.log(some);

    const navigate = useNavigate();

    const authorization = () => {
        let username = document.querySelectorAll('input[name=username]')[0].value;
        let password = document.querySelectorAll('input[name=pass]')[0].value;
        let isAuth = authService(username,password);
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
                <button onClick={() => authorization()}>Login</button>
            </div>
        </div>
    );
}
export default Login;
