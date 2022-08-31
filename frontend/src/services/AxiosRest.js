import axios from "axios";
import { cadastroBackend, loginBackend, url } from "../utils/globalNames";

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
