import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-clone-be-abc.herokuapp.com',
});

export default instance;
