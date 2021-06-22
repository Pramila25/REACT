import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HFN567msLnsIb0hZ8wjMlsTDhSZ8rRRdxtYLokzCppM'
    }
});