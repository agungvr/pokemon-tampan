import { BASE_API_URL } from "./constants";

const API = {
  allPokemon: ({ limit = 20, offset = 0 }) =>
    `${BASE_API_URL}/pokemon?offset=${offset}&limit=${limit}`,
  pokemonById: id => `${BASE_API_URL}/pokemon/${id}`
};

export default API;
