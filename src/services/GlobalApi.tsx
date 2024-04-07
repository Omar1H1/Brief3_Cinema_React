import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '996bd63b3f7de25cd097a6344e11c8b2';

export const fetchTrendingMovies = () => {
  return axios.get(baseUrl + '/trending/all/day?api_key=' + apiKey);
};
