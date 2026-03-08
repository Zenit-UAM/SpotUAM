import axios from "axios";

// axios para cambiar el uso de fetch en la parte del frontend

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true,
})

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response?.status == 401){
            window.dispatchEvent(new Event("session-expired"));
        }
        return Promise.reject(error);
    }

);

export default api;

