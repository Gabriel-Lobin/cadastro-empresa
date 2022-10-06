import React, { useContext } from "react";
import Modal from 'react-modal';
import { useEffect } from "react";
import CadastroInputEmpresa from "../../components/CadastroInputEmpresa";
import { DeleteEmpresaAxios, EditaEmpresaAxios, GetListaEmpresasAxios } from "../../services/AxiosRest";
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
    const { empresaEdicao, setEmpresaEdicao, toEdit, setToEdited, buttonClicked, setButtonClicked, listEmpresas, setListEmpresas, INITIAL_EMPRESA } = useContext(AppContext);

    const [modalIsOpen, setIsOpen] = React.useState(false);

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

    const editarEmpresa = async (id) => {
        await EditaEmpresaAxios(id, empresaEdicao);
        handleCloseModal();
        setButtonClicked(!buttonClicked);
    }

    const handleChange = (e) => {
        setEmpresaEdicao({
            ...empresaEdicao,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeEndereco = (e) => {
        setEmpresaEdicao({
            ...empresaEdicao,
            endereco: {
                ...empresaEdicao.endereco,
                [e.target.name]: e.target.value
            }
        });
    }

    function handleOpenModal(empresa) {
        setEmpresaEdicao(empresa);
        setIsOpen(true);
    }

    function handleCloseModal() {
        setEmpresaEdicao(INITIAL_EMPRESA);
        setToEdited(false);
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
                        listEmpresas.map((empresaCard, index) => {
                            const { id, razaoSocial, nomeFantasia, cnpj, telefone } = empresaCard;
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
                                                onClick={() => handleOpenModal(empresaCard)}>
                                                + info
                                            </button>
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onAfterOpen={() => afterOpenModal()}
                                                onRequestClose={() => handleCloseModal()}
                                                style={customStyles}
                                                contentLabel="Example Modal"
                                            >
                                                <h2>Info</h2>

                                                <fieldset className="form-group border p-3">
                                                    <legend>Dados</legend>
                                                    <div className="label">
                                                        <label htmlFor="razModal">Razão Social: </label>
                                                        <input type="text" id="razModal" name="razaoSocial" onChange={(e) => handleChange(e)} value={empresaEdicao.razaoSocial} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="nomeModal">Nome Fantasia: </label>
                                                        <input type="text" id="nomeModal" name="nomeFantasia" onChange={(e) => handleChange(e)} value={empresaEdicao.nomeFantasia} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="cpnjModal">CNPJ: </label>
                                                        <input type="text" id="cpnjModal" name="cnpj" onChange={(e) => handleChange(e)} value={empresaEdicao.cnpj} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="telModal">Telefone: </label>
                                                        <input type="text" id="telModal" name="telefone" onChange={(e) => handleChange(e)} value={empresaEdicao.telefone} disabled={!toEdit}></input>
                                                    </div>
                                                    <legend>Endereço</legend>
                                                    <div className="label">
                                                        <label htmlFor="lgModal">Logradouro: </label>
                                                        <input type="text" id="lgModal" name="logradouro" onChange={(e) => handleChangeEndereco(e)} value={empresaEdicao.endereco.logradouro} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="nuModal">Numero: </label>
                                                        <input type="text" id="nuModal" name="numero" onChange={(e) => handleChangeEndereco(e)} value={empresaEdicao.endereco.numero} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="coModal">Complemento: </label>
                                                        <input type="text" id="coModal" name="complemento" onChange={(e) => handleChangeEndereco(e)} value={empresaEdicao.endereco.complemento} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="baModal">Bairro: </label>
                                                        <input type="text" id="baModal" name="bairro" onChange={(e) => handleChangeEndereco(e)} value={empresaEdicao.endereco.bairro} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="ciModal">Cidade: </label>
                                                        <input type="text" id="ciModal" name="cidade" onChange={(e) => handleChangeEndereco(e)} value={empresaEdicao.endereco.cidade} disabled={!toEdit}></input>
                                                    </div>
                                                    <div className="label">
                                                        <label htmlFor="esModal">Estado: </label>
                                                        <input type="text" id="esModal" name="estado" onChange={(e) => handleChangeEndereco(e)} value={empresaEdicao.endereco.estado} disabled={!toEdit}></input>
                                                    </div>
                                                </fieldset>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleCloseModal}>
                                                        Close
                                                    </button>
                                                    {
                                                        !toEdit
                                                            ? (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                    onClick={() => setToEdited(!toEdit)}>
                                                                    Editar
                                                                </button>
                                                            )
                                                            : (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                    onClick={() => editarEmpresa(id)}>
                                                                    Confirmar
                                                                </button>
                                                            )
                                                    }
                                                </div>
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
