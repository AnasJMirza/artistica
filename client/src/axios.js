import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://artistica-server.onrender.com',
    headers: {'Content-Type': 'application/json'}
});


export default instance;