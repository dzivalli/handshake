import axios from 'axios';

const CHIRP_URL = '/chirps';

export function getChirps() {
  return axios
    .get(CHIRP_URL)
    .then(({ data }) => data)
}

export function createChirp(args) {
  return axios
    .post(CHIRP_URL, { chirp: args })
    .then(({ data }) => data);
}

export function upvoteChirp(chirpId) {
  return axios
    .post(`${CHIRP_URL}/${chirpId}/upvote`)
}

export function downvoteChirp(chirpId) {
  return axios
    .post(`${CHIRP_URL}/${chirpId}/downvote`)
}
