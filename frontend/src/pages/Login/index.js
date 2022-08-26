import React, { useState } from 'react';
import { Navigate } from 'react-router';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        // generateJwt(email);
        Navigate("/main", { replace: true });
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
