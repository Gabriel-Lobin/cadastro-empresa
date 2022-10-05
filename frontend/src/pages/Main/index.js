import React, { useContext } from "react";
import Modal from 'react-modal';
import { useEffect } from "react";
import CadastroInputEmpresa from "../../components/CadastroInputEmpresa";
import { DeleteEmpresaAxios, GetListaEmpresasAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";
import "./Modal.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
    },
};

Modal.setAppElement('#root');

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

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
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
                        listEmpresas.map(({ id, razaoSocial, nomeFantasia, cnpj, telefone, endereco }, index) => {
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
                                                onClick={handleOpenModal}>
                                                + info
                                            </button>
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onAfterOpen={afterOpenModal}
                                                onRequestClose={handleCloseModal}
                                                style={customStyles}
                                                contentLabel="Example Modal"
                                            >
                                                <h2>Cadastro</h2>
                                                <button onClick={handleCloseModal}>close</button>
                                                <div></div>
                                                <div className="label" >
                                                    <p>{razaoSocial}</p>
                                                </div>
                                                <div className="label">
                                                    <p>{nomeFantasia}</p>
                                                </div>

                                                <fieldset className="form-group border p-3">
                                                    <legend>Endereço</legend>
                                                    <div className="label">
                                                        <label htmlFor="lgModal">Logradouro: </label>
                                                        <input type="text" id="lgModal" value={endereco.logradouro} disabled></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="nuModal">Numero: </label>
                                                        <input type="text" id="nuModal" value={endereco.numero} disabled></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="coModal">Complemento: </label>
                                                        <input type="text" id="coModal" value={endereco.complemento} disabled></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="baModal">Bairro: </label>
                                                        <input type="text" id="baModal" value={endereco.bairro} disabled></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="ciModal">Cidade: </label>
                                                        <input type="text" id="ciModal" value={endereco.cidade} disabled></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="esModal">Estado: </label>
                                                        <input type="text" id="esModal" value={endereco.estado} disabled></input>
                                                    </div>
                                                </fieldset>
                                            </Modal>
                                        </td>
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
