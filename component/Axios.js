import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.nal.usda.gov/fdc/v1',
});

export default instance;
