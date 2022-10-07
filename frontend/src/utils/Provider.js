import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
    // https://v5.reactrouter.com/web/api/Redirect

    const INITIAL_EMPRESA = {
        razaoSocial: '',
        nomeFantasia: '',
        cnpj: '',
        telefone: '',
        endereco: {
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: 'Selecione um estado'
        }
    }

    const [loggedIn, setLogged] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [empresa, setEmpresa] = useState(INITIAL_EMPRESA);

    const [empresaEdicao, setEmpresaEdicao] = useState(INITIAL_EMPRESA);

    const [toEdit, setToEdited] = useState(false);

    const [listEmpresas, setListEmpresas] = useState([]);

    const contextValue = {
        INITIAL_EMPRESA,
        loggedIn,
        setLogged,
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        empresa,
        setEmpresa,
        listEmpresas,
        setListEmpresas,
        buttonClicked,
        setButtonClicked,
        toEdit,
        setToEdited,
        empresaEdicao,
        setEmpresaEdicao
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;