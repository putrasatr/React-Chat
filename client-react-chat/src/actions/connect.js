import axios from 'axios'

const request = axios.create({
    baseURL: 'http://192.168.1.58:3000/api',
    timeout: 1000,
    headers: {
        "Authentication": `Bearer ${localStorage.getItem("token")}`,
        "X-Custom-Header": "foobar"
    }
});
export default request
