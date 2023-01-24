import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://artistica.vercel.app/',
    headers: {'Content-Type': 'application/json'},
});


export default instance;