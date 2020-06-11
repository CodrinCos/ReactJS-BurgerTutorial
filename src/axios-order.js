import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-86529.firebaseio.com/"
});

export default instance;