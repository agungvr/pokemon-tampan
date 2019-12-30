import React, {
  useState,
  useEffect,
  useCallback,
  Suspense,
  useMemo
} from "react";
import { Button } from "./style";
import { createResourceHomePage } from "../../services/pokemon";
import Pokemon from "../../components/pokemon-card";
import { Loader1 } from "../../components/loader";

const totalPokemon = 964;

const Content = ({ resource, refetch }) => {
  const [data, setData] = useState([]);
  const pokemonList = resource.pokemon.read();
  const { results } = pokemonList;

  useEffect(() => {
    if (pokemonList) {
      const newData = Object.assign([], [...results]);
      setData(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonList]);

  return useMemo(
    () => (
      <>
        <Pokemon data={data} />
        <Button onClick={refetch}>Find random pokemon...</Button>
      </>
    ),
    [data, refetch]
  );
};

const ListPokemon = () => {
  const initialOffset = Math.floor(Math.random() * totalPokemon);

  const initialResource = createResourceHomePage({
    offset: initialOffset
  });

  const [resource, setResource] = useState(initialResource);
  const [, setOffset] = useState(initialOffset);

  const refetch = useCallback(() => {
    const newOffset = Math.floor(Math.random() * totalPokemon);
    setResource(createResourceHomePage({ offset: newOffset }));
    setOffset(newOffset);
  }, []);

  return (
    <Suspense fallback={<Loader1 />}>
      <Content resource={resource} refetch={refetch} />
    </Suspense>
  );
};

export default ListPokemon;
