import React, { useContext } from "react";
import { useEffect } from "react";
import CadastroInputEmpresa from "../../components/CadastroInputEmpresa";
import { GetListaEmpresasAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";

const Main = () => {
    const { listEmpresas, setListEmpresas } = useContext(AppContext);

    useEffect(() => {
        mainAxios();

    }, [])

    const mainAxios = async () => {
        const empresas = await GetListaEmpresasAxios();
        console.log(empresas.data);
        setListEmpresas(empresas.data);
    }

    return (
        <div>
            <CadastroInputEmpresa />
            <table>
                <tr>
                    <th>Razão social</th>
                    <th>Nome Fantasia</th>
                    <th>CNPJ</th>
                    <th>Telefone</th>
                </tr>
                {
                    listEmpresas.map(({ razaoSocial, nomeFantasia, cnpj, telefone }, index) => {
                        return (
                            <tr key={index}>
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
    );
}

export default Main;
