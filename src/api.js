import axios from 'axios';

const client = axios.create({
  baseURL: "//api-thriller-diary.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ({ method, url, data }) => client({
  url,
  method,
  data,
});