import axios from 'axios'

const port = 3000

const appApi = axios.create({
    baseURL: `http://localhost:${port}`
})

export default appApi