import { typesIcon } from '../Utils/utils';
export function PokemonData({ pokemonData }) {
  const getTypeOfPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];
  return (
    <>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h3>Name: {pokemonData?.name}</h3>
      <p>Weight: {pokemonData?.weight}</p>
      <p>Type: {getTypeOfPokemon(pokemonData?.types)}</p>

      <ul>
        <li></li>
      </ul>
    </>
  );
}
