import axios from 'axios';

const HttpClient = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});


export default HttpClient;