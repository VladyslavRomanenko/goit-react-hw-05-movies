import axios from 'axios';

const getOptions = url => {
  return {
    method: 'GET',
    url,
    params: {
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzBjYzljOGVkOWIxMjhkNGUyNmM1Njc0ZGZmYmNlYiIsInN1YiI6IjY0YTJlYmYxZDQwMGYzMDE0ZTk0MjBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ToixpBFSlsBkbp06G64EDIf997Y_strf1q8rQEIIA90',
    },
  };
};

export const getTrendingData = async () => {
  return await axios
    .request(getOptions('https://api.themoviedb.org/3/trending/movie/day'))
    .then(res => res.data.results)
    .catch(error => error);
};

export const getMovieDetails = async id => {
  return await axios
    .request(getOptions(`https://api.themoviedb.org/3/movie/${id}`))
    .then(res => res.data)
    .catch(error => error);
};

export const getCast = async id => {
  return await axios
    .request(
      getOptions(`
https://api.themoviedb.org/3/movie/${id}}/credits`)
    )
    .then(res => res.data)
    .catch(error => error);
};

export const getRewies = async id => {
  return await axios
    .request(
      getOptions(`
https://api.themoviedb.org/3/movie/${id}/reviews`)
    )
    .then(res => res.data)
    .catch(error => error);
};

export const getMoviesByName = async name => {
  return await axios
    .request(
      getOptions(
        `
https://api.themoviedb.org/3/search/movie?query=${name}`
      )
    )
    .then(res => res.data.results)
    .catch(error => error);
};
