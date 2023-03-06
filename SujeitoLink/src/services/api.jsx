import axios from "axios";

export const key = '0d3f823947d03505adef61acc14e9c9a6f1b02e1'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api
