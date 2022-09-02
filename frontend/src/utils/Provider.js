import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
    // https://v5.reactrouter.com/web/api/Redirect

    const [loggedIn, setLogged] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [empresa, setEmpresa] = useState({
        razaoSocial: '',
        nomeFantasia: '',
        cnpj: '',
        telefone: '',
        endereco: {
            logradouro: '',
            numero: '',
            complemento:'',
            bairro:'',
            cidade: '',
            estado: ''
        }
    });

    const contextValue = {
        loggedIn,
        setLogged,
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        empresa,
        setEmpresa
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;