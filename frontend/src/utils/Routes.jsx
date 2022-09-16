import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
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

            <Route path={loginPath}
                element={
                    loggedIn
                        ? <Navigate to={mainPath} replace />
                        : <Login />

                } />

            <Route path={mainPath}
                element={
                    loggedIn
                        ? <Main />
                        : <Navigate to={loginPath} replace />
                } />

            {/* <Route path={cadastroPath} /> */}

            <Route path="*" element={<h1>PAGE NO FOUND !!!</h1>} />

        </Routes >
    );
}

export default RoutesApp;