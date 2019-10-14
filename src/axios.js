import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

instance.defaults.headers['user-key'] = `${process.env.REACT_APP_API_KEY}`;

export default instance;
