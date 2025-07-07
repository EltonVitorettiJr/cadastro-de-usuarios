import axios from "axios";

const api = axios.create({

    baseURL: "https://cadastro-de-usuarios-jxas.onrender.com"

})

export default api