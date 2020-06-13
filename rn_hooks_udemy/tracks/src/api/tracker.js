import axios from 'axios';

const trackerApi = axios.create({
  baseURL: `http://e67511023539.ngrok.io`,
  //setup ngrok to redirect internally to localhost 3000
});

export default trackerApi;
