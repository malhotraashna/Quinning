import axios from 'axios';

const client = axios.create({
  baseURL: "https://lldev.thespacedevs.com/2.2.0",
});

export default client;