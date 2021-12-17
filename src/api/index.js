import axios from 'axios';
import { getEnvVars } from '../utils/envs';

const env = getEnvVars(window.location.host);
const API = axios.create({ baseURL: env.BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('loggedInUser')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('loggedInUser')).token
    }`;
  }
  return req;
});

// auth
export const signin = (formData) => API.post('api/signin', formData);
export const signup = (formData) => API.post('api/signup', formData);

// games
export const getGames = (query, userId) => {
  const url = `api/${userId && `users/${userId}/`}games`;
  return API.get(url);
};

export const saveGame = (newGame) => API.post('api/games', newGame);

// scores
export const getScores = () => {
  const url = `api/scores`;
  return API.get(url, { params: { sort: 'score' } });
};
