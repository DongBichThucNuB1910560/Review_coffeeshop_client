import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5500/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');