import { useNavigate } from 'react-router-dom';

import * as authService from "../../services/authService";
import { withAuth } from "../../contexts/AuthContext";

import './Register.css';

const Register = ({ auth }) => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/blog');
            });
    }

    return (
        <section id="register-page" className="content auth">
            <div className="register-heading">
            <h1>Hello dear user!</h1>
            <p>Please type your email &amp; choose your password in the form below to register.<br/> Happy blogging!</p>
            </div>
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                    />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="confirm-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" /><br/>

                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
            <p className="field">
                        <span>
                            If you already have profile click <a href="/login">here</a>
                        </span>
                    </p>
        </section>
    );
};

const RegisterWithAuth = withAuth(Register);

export default RegisterWithAuth;
