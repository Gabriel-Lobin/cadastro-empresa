import axios from "axios";
import { cadastroBackend, empresaBackend, loginBackend, url } from "../utils/globalNames";

// Usuário

export const CadastroAxios = async (name, email, password) => {
    const cadastro = await axios.post(`${url}${cadastroBackend}`,
        {
            name,
            email,
            password
        }
    );

    return cadastro;
}

export const LoginAxios = async (email, password) => {
    const token = await axios.post(`${url}${loginBackend}`,
        {
            email,
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

export const EditaEmpresaAxios = async (id, empresa) => {
    const empresaEditada = await axios.put(`${url}${empresaBackend}/${id}`,
        empresa
    );

    return empresaEditada;
}
