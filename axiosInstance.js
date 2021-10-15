import axios from 'axios';

const instance = axios.create({
    baseURL:"https://agile-skyline-279811.firebaseio.com/"
})

export default instance;