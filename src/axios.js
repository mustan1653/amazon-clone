import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-ff4d5.cloudfunctions.net/api'
            //'http://localhost:5001/clone-ff4d5/us-central1/api'
});

export default instance;