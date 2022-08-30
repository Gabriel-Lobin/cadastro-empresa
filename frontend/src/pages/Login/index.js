import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import AppContext from '../../utils/AppContext';
import { mainPath } from '../../utils/globalNames';

const Login = () => {

    const { email, password, setEmail, setPassword } = useContext(AppContext);

    const login = () => {
        // generateJwt(email);
        Navigate(mainPath, { replace: true });
    }

    return (
        <div>
            <form action="">
                <label htmlFor="email-input">
                    email
                    <input
                        id="email-input"
                        value={email}
                        type="text"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label htmlFor="password-input">
                    password
                    <input
                        id="password-input"
                        value={password}
                        type="password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </label>

                <button
                    type="button"
                    onClick={() => login()}
                >
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;
