import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import AppContext from './AppContext';
import { loginPath, mainPath } from './globalNames';

function RoutesApp() {
    const { loggedIn } = useContext(AppContext);

    return (
        <Routes>

            <Route exact path="/"
                element={
                    loggedIn
                        ? <Navigate to={mainPath} replace />
                        : <Navigate to={loginPath} replace />
                } />

            <Route path={loginPath} element={<Login />} />
            {/* <Route path={cadastroPath} /> */}
            {/* <Route path={mainPath} /> */}

            <Route path="*" element={<h1>PAGE NO FOUND !!!</h1>} />

        </Routes >
    );
}

export default RoutesApp;