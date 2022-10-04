import React, { useContext } from "react";
import { useEffect } from "react";
import CadastroInputEmpresa from "../../components/CadastroInputEmpresa";
import { DeleteEmpresaAxios, GetListaEmpresasAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";

const Main = () => {
    const { buttonClicked, setButtonClicked, listEmpresas, setListEmpresas } = useContext(AppContext);

    useEffect(() => {
        mainAxios();
    }, [buttonClicked]);

    const mainAxios = async () => {
        const empresas = await GetListaEmpresasAxios();
        setListEmpresas(empresas.data);
    }

    const deletaEmpresa = async (id) => {
        await DeleteEmpresaAxios(id);
        setButtonClicked(!buttonClicked);
    }

    return (
        <div>
            <CadastroInputEmpresa />

            <br />

            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3 style={{ textAlign: "center" }}>Empresas Cadastradas</h3>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Razão social</th>
                            <th scope="col">Nome Fantasia</th>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>
                    {
                        listEmpresas.map(({ id, razaoSocial, nomeFantasia, cnpj, telefone }, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{razaoSocial}</td>
                                        <td>{nomeFantasia}</td>
                                        <td>{cnpj}</td>
                                        <td>{telefone}</td>
                                        <td>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => deletaEmpresa(id)}>
                                            Excluir
                                        </button>
                                        </td>
                                    </tr>
                                </tbody>

                            );
                        })
                    }
                </table>
            </div>

        </div>
    );
}

export default Main;
