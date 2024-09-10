import axios from 'axios' // biblioteca responsavel por fazer a união entro o back e front-end

const api = axios.create({ // Aqui eu crio um objeto para chamar o axios create e trazer nossa URL do servidor
    baseURL: 'http://localhost:3000'
})

export default api