import axios from 'axios';

const URL = 'http://192.168.1.102:3333';

export default axios.create({
  baseURL: URL,
});
