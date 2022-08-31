import React, { useContext } from "react";
import { CadastroEmpresaAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";

const CadastroInputEmpresa = () => {

    const { empresa, setEmpresa } = useContext(AppContext);

    const handleChange = (e) => {
        setEmpresa({
            ...empresa,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeEndereco = (e) => {
        setEmpresa({
            ...empresa,
            endereco: {
                ...empresa.endereco,
                [e.target.name]: e.target.value
            }
        });
    }

    const CadastrarEmpresa = () => {
        CadastroEmpresaAxios(empresa);
    }

    return (
        <div>
            <div>
                <label htmlFor="razaoSocial">
                    Razao Social
                    <input type="text" name="razaoSocial" value={empresa.razaoSocial} id="razaoSocial" onChange={(e) => handleChange(e)} />
                </label>
                <label htmlFor="nomeFantasia">
                    Nome Fantasia
                    <input type="text" name="nomeFantasia" value={empresa.nomeFantasia} id="nomeFantasia" onChange={(e) => handleChange(e)} />
                </label>
                <label htmlFor="cnpj">
                    CNPJ
                    <input type="text" name="cnpj" value={empresa.cnpj} id="cnpj" onChange={(e) => handleChange(e)} />
                </label>
                <label htmlFor="telefone">
                    Telefone
                    <input type="text" name="telefone" value={empresa.telefone} id="telefone" onChange={(e) => handleChange(e)} />
                </label>
            </div>
            <div>
                <label htmlFor="logradouro">
                    Logradouro
                    <input type="text" name="logradouro" value={empresa.endereco.logradouro} id="logradouro" onChange={(e) => handleChangeEndereco(e)} />
                </label>
                <label htmlFor="numero">
                    Numero
                    <input type="text" name="numero" value={empresa.endereco.numero} id="numero" onChange={(e) => handleChangeEndereco(e)} />
                </label>
                <label htmlFor="complemento">
                    Complemento
                    <input type="text" name="complemento" value={empresa.endereco.complemento} id="complemento" onChange={(e) => handleChangeEndereco(e)} />
                </label>
                <label htmlFor="bairro">
                    Bairro
                    <input type="text" name="bairro" value={empresa.endereco.bairro} id="bairro" onChange={(e) => handleChangeEndereco(e)} />
                </label>
                <label htmlFor="cidade">
                    Cidade
                    <input type="text" name="cidade" value={empresa.endereco.cidade} id="cidade" onChange={(e) => handleChangeEndereco(e)} />
                </label><label htmlFor="estado">
                    Estado
                    <input type="text" name="estado" value={empresa.endereco.estado} id="estado" onChange={(e) => handleChangeEndereco(e)} />
                </label>
            </div>
            <button type="button" onClick={() => CadastrarEmpresa()}>
                Cadastrar
            </button>
        </div>
    );
}

export default CadastroInputEmpresa;
