import axios from 'axios'

const port = 3000
const url = "https://metacotest.herokuapp.com"

const appApi = axios.create({
    baseURL: process.env.NODE_ENV ? url : `http://localhost:${port}`
})

export default appApi