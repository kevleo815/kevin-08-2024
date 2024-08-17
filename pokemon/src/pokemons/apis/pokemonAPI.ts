import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

//searchApi.defaults.withCredentials = true;

export default searchApi;
