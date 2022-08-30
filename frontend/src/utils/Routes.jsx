import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import AppContext from './AppContext';

function RoutesApp() {
    const { loggedIn } = useContext(AppContext);

    return (
        <Routes>

            <Route exact path="/"
                element={
                    loggedIn
                        ? <Navigate to="/main" replace />
                        : <Navigate to="/login" replace />
                } />

            <Route path="/login" element={<Login />} />
            {/* <Route path="/cadastro" /> */}
            {/* <Route path="/main" /> */}

            <Route path="*" element={<h1>PAGE NO FOUND !!!</h1>} />

        </Routes >
    );
}

export default RoutesApp;