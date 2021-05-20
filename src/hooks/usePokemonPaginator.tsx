import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {
  PokemonOverview,
  PokemonPage,
  PokemonPageItem,
} from '../model/pokemon';

export const usePokemonPaginator = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [pokemons, setPokemons] = useState<PokemonOverview[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPokemons = async () => {
    setIsLoading(true);
    try {
      const resp = await pokemonApi.get<PokemonPage>(nextPageUrl.current);
      setPokemons([...pokemons, ...resp.data.results.map(mapper)]);
      nextPageUrl.current = resp.data.next;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const mapper = (pokemon: PokemonPageItem): PokemonOverview => {
    const [id] = pokemon.url
      .split('/')
      .filter(w => !!w)
      .reverse();

    return {
      id: Number(id),
      name: pokemon.name,
      url: pokemon.url,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { isLoading, pokemons, fetchNextPage: loadPokemons };
};
