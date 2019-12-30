import API from "../utils/api";
import { wrapPromise } from "../utils/wrap-promise";

const fetchById = id => {
  return fetch(API.pokemonById(id)).then(res => res.json());
};

const fetchGetList = params => {
  return fetch(API.allPokemon(params))
    .then(res => res.json())
    .then(async res => {
      const data = Object.assign([], res.results);
      const pokemon = await Promise.all(data.map(item => fetchById(item.name)));
      res.results = pokemon;
      return res;
    });
};

export function createResourceHomePage(params) {
  let listPromise = fetchGetList(params);
  return {
    pokemon: wrapPromise(listPromise)
  };
}

export function createResourceDetailsPage(params) {
  let byIdPromise = fetchById(params);
  return {
    pokemonById: wrapPromise(byIdPromise)
  };
}
