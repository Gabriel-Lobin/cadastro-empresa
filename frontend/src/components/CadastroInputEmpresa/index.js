import React, { useContext } from "react";
import { CadastroEmpresaAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";

const CadastroInputEmpresa = () => {

    const { empresa, setEmpresa, buttonClicked, setButtonClicked } = useContext(AppContext);

    const listEstado = ["Selecione um estado", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES"];

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

    const CadastrarEmpresa = async () => {
        await CadastroEmpresaAxios(empresa);
        setButtonClicked(!buttonClicked);
    }

    return (
        <div className="container">
            <form>
                <fieldset className="form-group border p-3">
                    <legend>Empresa</legend>
                    <div className="container">

                        <div className="row d-flex">
                            <div className="form-group col-md-6">
                                <label htmlFor="razaoSocial">Razão Social</label>
                                <input type="text"
                                    className="form-control"
                                    id="razaoSocial"
                                    name="razaoSocial"
                                    aria-describedby="razaoSocial"
                                    placeholder="Enter razão social"
                                    value={empresa.razaoSocial}
                                    onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="nomeFantasia">Nome Fantasia</label>
                                <input type="text"
                                    className="form-control"
                                    id="nomeFantasia"
                                    name="nomeFantasia"
                                    aria-describedby="nomeFantasia"
                                    placeholder="Enter nome fantasia"
                                    value={empresa.nomeFantasia}
                                    onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className="row d-flex">
                            <div className="form-group col-md-6">
                                <label htmlFor="cnpj">CNPJ</label>
                                <input type="text"
                                    className="form-control"
                                    id="cnpj"
                                    name="cnpj"
                                    aria-describedby="cnpj"
                                    placeholder="Enter nome cnpj"
                                    value={empresa.cnpj}
                                    onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text"
                                    className="form-control"
                                    id="telefone"
                                    name="telefone"
                                    aria-describedby="telefone"
                                    placeholder="Enter telefone"
                                    value={empresa.telefone}
                                    onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <br></br>

                <fieldset className="form-group border p-3">
                    <legend>Endereco</legend>
                    <div className="container">

                        <div className="row d-flex">
                            <div className="form-group col-md-6">
                                <label htmlFor="logradouro">Logradouro</label>
                                <input type="text"
                                    className="form-control"
                                    id="logradouro"
                                    name="logradouro"
                                    aria-describedby="logradouro"
                                    placeholder="Enter logradouro"
                                    value={empresa.endereco.logradouro}
                                    onChange={(e) => handleChangeEndereco(e)} />
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="numero">Numero</label>
                                <input type="text"
                                    className="form-control"
                                    id="numero"
                                    name="numero"
                                    aria-describedby="numero"
                                    placeholder="Enter numero"
                                    value={empresa.endereco.numero}
                                    onChange={(e) => handleChangeEndereco(e)} />
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="complemento">Complemento</label>
                                <input type="text"
                                    className="form-control"
                                    id="complemento"
                                    name="complemento"
                                    aria-describedby="complemento"
                                    placeholder="Enter complemento"
                                    value={empresa.endereco.complemento}
                                    onChange={(e) => handleChangeEndereco(e)} />
                            </div>
                        </div>

                        <div className="row d-flex">
                            <div className="form-group col-md-6">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text"
                                    className="form-control"
                                    id="bairro"
                                    name="bairro"
                                    aria-describedby="bairro"
                                    placeholder="Enter bairro"
                                    value={empresa.endereco.bairro}
                                    onChange={(e) => handleChangeEndereco(e)} />
                            </div>

                            <div className="form-group col-md-3">
                                <label htmlFor="estado">Estado</label>
                                <select id="estado" name="estado" className="form-select" aria-label="Default select example" defaultValue="Selecione um estado"
                                    onChange={(e) => handleChangeEndereco(e)}>
                                    {listEstado.map((item, index) => {
                                        return(
                                            <option key={index} value="{index}">{item}</option>
                                        )
                                    })}                                
                                </select>
                            </div>
                        </div>

                    </div>
                </fieldset>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => CadastrarEmpresa()}>
                    Cadastrar
                </button>
            </form>

        </div>
    );
}

export default CadastroInputEmpresa;
