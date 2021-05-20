import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonDetail } from '../model/pokemon';

export const usePokemonDetail = (endpoint: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail>();

  useEffect(() => {
    pokemonApi
      .get<PokemonDetail>(endpoint)
      .then(res => setPokemonDetail(res.data))
      .catch(() => setPokemonDetail(undefined))
      .finally(() => setIsLoading(false));
  }, [endpoint]);

  return { isLoading, pokemonDetail };
};
