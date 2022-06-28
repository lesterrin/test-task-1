import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const Login = ({isLoggedIn, setIsLoggedIn}) => {

        const navigate = useNavigate();

        if(isLoggedIn){
           navigate('/profile');
        }

        else{
            return(
                <button
                    className="btn btn-primary" onClick={() => setIsLoggedIn(true)}>
                    Login</button>
                /*<div>
                    <h1>login page</h1>
                        <div className="form">
                            <label htmlFor="username"><b>User name</b></label>
                            <input type="text" name="username"/>
                            <label htmlFor="pass"><b>Password</b></label>
                            <input type="password" name="pass"/>
                            <button>Log In</button>
                        </div>
                    </div>*/
        );
        }

}

export default Login;
