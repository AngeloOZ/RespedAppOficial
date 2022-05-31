const axios = require('axios');

export const configAxios = axios.create({
    baseURL: 'https://respedapp.onrender.com/api'
});