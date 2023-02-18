import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users/',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: (data) => {
    privateApi.defaults.headers.Authorization = `${data.token_type} ${data.access_token}`;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
