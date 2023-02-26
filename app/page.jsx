"use client";

import { useEffect, useState } from "react";
import PokemonCard from "./components/molecules/PokemonCard";
import PokemonData from "./components/molecules/PokemonData";
import PokedexEntry from "./components/molecules/PokedexEntry";

export default function Page() {
  const [pokemon, setPokemon] = useState(null);
  const [showContent, setShowContent] = useState(false);

  //@todo: usePokemon

  const fetchData = async (id, endpoint) => {
    const response = await fetch(`/api/pokemon/${endpoint}?id=${id}`);
    return await response.json();
  };

  const fetchPokemon = async (id) => {
    try {
      console.log("id", id);

      let response = await fetchData(id, "get");
      let data = response.success ? response.data : null;

      if (data) {
        const { pokemon: poketMonsterData, id: newID } = data;

        console.log("newID", newID);

        response = await fetchData(newID, "evolutionChain");
        data = response.success ? response.data : null;
        const { chain: evolutionChainData } = data;

        response = await fetchData(newID, "pokedex");
        const pokedexData = response.success ? response.data : null;

        const poketMonster = { ...poketMonsterData };
        const evolutionChain = { ...evolutionChainData };
        const pokedex = { ...pokedexData };

        return { poketMonster, evolutionChain, pokedex };
      }

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 800) + 1;
    };

    const intervalId = setInterval(async () => {
      console.log("ping");
      const rnd = getRandomNumber();
      const pokemonData = await fetchPokemon(rnd);

      //@todo: if not pokemon, then it will take time to load the next one.
      //Show a message for the user saying the fetch is taking longer than expected, please be patient
      pokemonData && setPokemon(pokemonData);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const { poketMonster, evolutionChain, pokedex } = { ...pokemon };

  return (
    <>
      <div className="py-8 px-6 max-w-md h-30 flex">
        <PokemonCard poketMonster={poketMonster} />
        <PokemonData
          poketMonster={poketMonster}
          evolutionChain={evolutionChain}
        />
      </div>
      <div className="py-4 px-6 max-w-2xl">
        <PokedexEntry pokedex={pokedex} />
      </div>
    </>
  );
}
