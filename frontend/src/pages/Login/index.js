import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router';
import AppContext from '../../utils/AppContext';
import { mainPath } from '../../utils/globalNames';

const Login = () => {

    const { email, password, setEmail, setPassword } = useContext(AppContext);

    const login = () => {
        // generateJwt(email);
        Navigate(mainPath, { replace: true });
    }

    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }


    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email-input">
                                Email address
                            </label>
                            <input
                                id="email-input"
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                            />

                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password-input">
                                Password
                            </label>
                            <input
                                id="password-input"
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />

                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={() => login()}>
                                login
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="e.g Barty Simpson"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email-input">
                            Email address
                        </label>
                        <input
                            id="email-input"
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />

                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="password-input">
                            Password
                        </label>
                        <input
                            id="password-input"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />

                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={() => login()}>
                            Cadastrar
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )


}

export default Login;
