import React, { useContext, useState } from "react";
// import Modal from 'react-modal';
import { useEffect } from "react";
import CadastroInputEmpresa from "../../components/CadastroInputEmpresa";
import { DeleteEmpresaAxios, EditaEmpresaAxios, GetListaEmpresasAxios } from "../../services/AxiosRest";
import AppContext from "../../utils/AppContext";
import "./Modal.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Main = () => {
    const { empresaEdicao, setEmpresaEdicao, toEdit, setToEdited, buttonClicked, setButtonClicked, listEmpresas, setListEmpresas, INITIAL_EMPRESA } = useContext(AppContext);

    const listEstado = ["Selecione um estado", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES"];

    const [show, setShow] = useState(false);

    const [modalId, setModalId] = React.useState();

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
        setModalId(empresa.id);
        setShow(true);
    }

    function handleCloseModal() {
        setEmpresaEdicao(INITIAL_EMPRESA);
        setToEdited(false);
        setShow(false);
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
                                            <Button variant="primary" onClick={() => handleOpenModal(empresaCard)}>
                                                + info
                                            </Button>

                                            <Modal show={show} onHide={handleCloseModal} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>+ Info</Modal.Title>
                                                </Modal.Header>

                                                <Modal.Body>
                                                    <Form className="container">
                                                        <div className="formModal">
                                                            <div>
                                                                <Form.Group className="mb-3" controlId="razModal">
                                                                    <Form.Label>Razão Social:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="razModal"
                                                                        name="razaoSocial"
                                                                        placeholder="Razão Social"
                                                                        onChange={(e) => handleChange(e)}
                                                                        value={empresaEdicao.razaoSocial}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="nomeModal">
                                                                    <Form.Label>Nome Fantasia:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="nomeModal"
                                                                        name="nomeFantasia"
                                                                        placeholder="Nome Fantasia"
                                                                        onChange={(e) => handleChange(e)}
                                                                        value={empresaEdicao.nomeFantasia}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="cpnjModal">
                                                                    <Form.Label>CNPJ:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="cpnjModal"
                                                                        name="cnpj"
                                                                        placeholder="xx.xxx.xxx/0001-xx"
                                                                        onChange={(e) => handleChange(e)}
                                                                        value={empresaEdicao.cnpj}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="telModal">
                                                                    <Form.Label>Telefone:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="telModal"
                                                                        name="telefone"
                                                                        placeholder="(38) 99876-5432"
                                                                        onChange={(e) => handleChange(e)}
                                                                        value={empresaEdicao.telefone}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>
                                                            </div>

                                                            <div>
                                                                <Form.Group className="mb-3" controlId="lgModal">
                                                                    <Form.Label>Logradouro:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="lgModal"
                                                                        name="logradouro"
                                                                        placeholder="Rua/Avenida"
                                                                        onChange={(e) => handleChangeEndereco(e)}
                                                                        value={empresaEdicao.endereco.logradouro}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="nuModal">
                                                                    <Form.Label>Numero:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="nuModal"
                                                                        name="numero"
                                                                        placeholder="123"
                                                                        onChange={(e) => handleChangeEndereco(e)}
                                                                        value={empresaEdicao.endereco.numero}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="coModal">
                                                                    <Form.Label>Complemento:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="coModal"
                                                                        name="complemento"
                                                                        placeholder="complemento"
                                                                        onChange={(e) => handleChangeEndereco(e)}
                                                                        value={empresaEdicao.endereco.complemento}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="baModal">
                                                                    <Form.Label>Bairro:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="baModal"
                                                                        name="bairro"
                                                                        placeholder="bairro"
                                                                        onChange={(e) => handleChangeEndereco(e)}
                                                                        value={empresaEdicao.endereco.bairro}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="ciModal">
                                                                    <Form.Label>Cidade:</Form.Label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="ciModal"
                                                                        name="cidade"
                                                                        placeholder="cidade"
                                                                        onChange={(e) => handleChangeEndereco(e)}
                                                                        value={empresaEdicao.endereco.cidade}
                                                                        defaultValue={null}
                                                                        disabled={!toEdit}>
                                                                    </input>
                                                                </Form.Group>

                                                                <Form.Group className="mb-3" controlId="esModal">
                                                                <Form.Label>Estado:</Form.Label>
                                                                    <select 
                                                                        id="esModal" 
                                                                        name="estado" 
                                                                        className="form-select" 
                                                                        aria-label="Default select example" 
                                                                        valueDefault="Selecione um estado"
                                                                        onChange={(e) => handleChangeEndereco(e)}
                                                                        value={empresaEdicao.endereco.estado}
                                                                        disabled={!toEdit}>
                                                                        {
                                                                            listEstado.map((item, index) => {
                                                                                return (
                                                                                    <option key={index} value={item}>{item}</option>
                                                                                )
                                                                            })}
                                                                    </select>
                                                                </Form.Group>
                                                            </div>
                                                        </div>

                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseModal}>
                                                        Fechar
                                                    </Button>
                                                    {
                                                        !toEdit
                                                            ? (
                                                                <Button variant="primary" onClick={() => setToEdited(!toEdit)}>
                                                                    Editar
                                                                </Button>
                                                            )
                                                            : (
                                                                <Button variant="primary" onClick={() => editarEmpresa(modalId)}>
                                                                    Confirmar
                                                                </Button>
                                                            )
                                                    }
                                                </Modal.Footer>
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
