import React, { useContext } from "react";
import { useEffect } from "react";
import CadastroInputEmpresa from "../../components/CadastroInputEmpresa";
import { GetListaEmpresasAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";

const Main = () => {
    const { buttonClicked, listEmpresas, setListEmpresas } = useContext(AppContext);

    useEffect(() => {
        mainAxios();
    }, [buttonClicked]);

    const mainAxios = async () => {
        const empresas = await GetListaEmpresasAxios();
        setListEmpresas(empresas.data);
    }

    return (
        <div>
            <CadastroInputEmpresa />
            
            <br />
            
            <div className="container">
                <div class="card">
                    <div class="card-body">
                    <h3 style={{textAlign: "center"}}>Empresas Cadastradas</h3>
                    </div>
                </div>
                
                <table class="table">
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
                        listEmpresas.map(({ razaoSocial, nomeFantasia, cnpj, telefone }, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{razaoSocial}</td>
                                    <td>{nomeFantasia}</td>
                                    <td>{cnpj}</td>
                                    <td>{telefone}</td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>

        </div>
    );
}

export default Main;
