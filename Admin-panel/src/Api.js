import Axios from 'axios';
var baseUrl ="/server"
if (process.env.NODE_ENV !== 'production'){
    baseUrl = "http://localhost:4480/"
}
const instance = Axios.create({
    baseURL:baseUrl,
    headers: {
        //  Authorization: `<Your Auth Token>`,
            "Content-Type": "application/json",
          }, 
});

export default instance