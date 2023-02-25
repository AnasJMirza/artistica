import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://artistica-server.onrender.com',
    baseURL: 'http://localhost:8080',
    headers: {'Content-Type': 'application/json'}
});


export default instance;