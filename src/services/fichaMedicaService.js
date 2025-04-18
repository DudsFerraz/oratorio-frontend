import api from "./api";

const a = "/fichaMedica";

const register = () => api.post(`${a}`);
const get = () => api.get(`${a}`);

export default{
    register,
    get
}