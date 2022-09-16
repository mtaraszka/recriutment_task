import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

axios.defaults.headers.common['x-apikey'] = `${process.env.REACT_APP_API_KEY}`;
