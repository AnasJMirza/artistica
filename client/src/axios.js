import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://artistica.vercel.app/',
    headers: {'Content-Type': 'application/json'},
});


export default instance;