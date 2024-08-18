import axios from 'axios';

const searchApi = axios.create({ //Creamos una nueva instancia de axios
    baseURL: 'https://pokeapi.co/api/v2/', //Definimos la url base de la api
});

//searchApi.defaults.withCredentials = true; //esto solo se aplica si el servidor pide credenciales

export default searchApi;
