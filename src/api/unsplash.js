import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID pWfO6YuG2i_Ngtl_6RNrlQlxU7Tp-8Ii7N_y8n4NBQ8'
    }
});