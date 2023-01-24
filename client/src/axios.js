import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://artistica-anasjmirza.vercel.app/',
    headers: {'Content-Type': 'application/json'},
});


export default instance;