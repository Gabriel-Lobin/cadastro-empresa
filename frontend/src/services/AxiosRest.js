import axios from "axios";
import { cadastroBackend, empresaBackend, loginBackend, url } from "../utils/globalNames";

// Usuário

export const CadastroAxios = async (name, password) => {
    const cadastro = await axios.post(`${url}${cadastroBackend}`,
        {
            name,
            password
        }
    );

    return cadastro;
}

export const LoginAxios = async (name, password) => {
    const token = await axios.post(`${url}${loginBackend}`,
        {
            name,
            password
        }
    );

    return token;
}

// Empresa

export const CadastroEmpresaAxios = async (empresa) => {
    const empresaCriada = await axios.post(`${url}${empresaBackend}`,
        empresa
    );

    return empresaCriada;
}

export const GetListaEmpresasAxios = async () => {
    const ListEmpresas = await axios.get(`${url}${empresaBackend}`);

    return ListEmpresas;
}

export const DeleteEmpresaAxios = async (id) => {
    const empresa = await axios.delete(`${url}${empresaBackend}/${id}`);

    return empresa;
}
