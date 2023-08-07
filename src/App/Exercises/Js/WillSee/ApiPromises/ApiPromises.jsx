import { useEffect, useState } from 'react';
import { typesIcon } from './Utils/utils';
import './styles.css';

import axios from 'axios';
import { PokemonData } from './PokemonData/PokemonData';
import { BarLoader } from 'react-spinners';

export function ExerciseApiPromises() {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  const getKeyOfTypeOfPokemon = (typeOfPokemon = []) =>
    typeOfPokemon[0].type.name;

  //   const getTypeOfPokemon = (typeOfPokemon = []) =>
  //     typesIcon[typeOfPokemon[0].type.name];
  const setCssClass = (pokemonData) =>
    `container--grid-tile dedicated-background--${getKeyOfTypeOfPokemon(
      pokemonData?.types
    )}`;

  useEffect(() => {
    axios
      .get(BASE_POKEMON_API_URL)
      .then((response) => {
        const pokemonList = response.data.results;
        const pokemonPromises = pokemonList.map((pokemon) =>
          axios.get(pokemon.url)
        );

        console.log('pokemonPromises', pokemonPromises);

        Promise.all(pokemonPromises)
          .then((secondResponses) => {
            const pokemonsData = secondResponses.map(
              (secondResponses) => secondResponses.data
            );
            setPokemons(pokemonsData);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error?.message);
            setIsLoading(false);
          });
        ////////////////////////////////////
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container--api-promises">
      <h1> {getIsLoading && <BarLoader />} </h1>
      <h2> {getError && getError} </h2>

      <div className="container--grid-wrapper">
        {getPokemons.map((pokemon) => (
          <div className={setCssClass(pokemon)}>
            <PokemonData pokemonData={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
