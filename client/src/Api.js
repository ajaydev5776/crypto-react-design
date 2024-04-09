import Axios from 'axios';

const api = Axios.create({
    baseURL:'http://localhost:4480/'
});

export default api