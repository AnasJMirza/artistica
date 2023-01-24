import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ill-ruby-peacock-gown.cyclic.app/',
    headers: {'Content-Type': 'application/json'},
});


export default instance;