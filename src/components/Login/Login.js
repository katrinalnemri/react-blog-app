import { useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

import './Login.css';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/my-posts');
            })
            .catch(() => {
                navigate('/404');
            });
    };

    return (
         
        <section id="login-page" className="auth">
            <div className="login-heading">
            <h1>Welcome dear user!</h1>
            <p>Please use your email &amp; password in the form below to sign in.<br/> Happy blogging!</p>
            </div>
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" /><br/>
                    <input type="submit" className="btn submit" value="Login" />
                  
                </div>
            </form>
            <p className="field">
                        <span>
                            If you don't have profile click <a href="/register">here</a>
                        </span>
                    </p>
        </section>
    );
}

export default Login;
