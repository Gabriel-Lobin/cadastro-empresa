import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  // https://v5.reactrouter.com/web/api/Redirect

  // let loggedIn = false;

  return (
    <Routes>
      {/* <Route exact path="/">
        {loggedIn ? <Navigate to="/main" /> : <Navigate to="/login" />}
      </Route> */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" />
      <Route path="/main" />
      <Route path="*" element={<h1>PAGE NO FOUND</h1>} />
    </Routes>
  );
}

export default App;
