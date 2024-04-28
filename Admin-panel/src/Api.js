import Axios from 'axios';

const instance = Axios.create({
    baseURL:'http://localhost:4480/',
    headers: {
        //  Authorization: `<Your Auth Token>`,
            "Content-Type": "application/json",
          }, 
});

export default instance