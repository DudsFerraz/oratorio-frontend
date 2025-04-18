import api from "./api";

const a = "/oratoriano";

const register = (dto) => api.post(`${a}`,dto);
const getShort = () => api.get(`${a}/getShort`);
const getFull = () => api.get(`${a}/getFull`);
const getAllShort = (ordem) => api.get(`${a}/getAllShort/${ordem}`);
const getAllFull = (ordem) => api.get(`${a}/getAllFull/${ordem}`);

export default{
    register,
    getShort,
    getFull,
    getAllShort,
    getAllFull
}