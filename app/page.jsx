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
      const { pokemon: poketMonsterData, id: newID } = await fetchData(
        id,
        "get"
      );
      console.log("newID", newID);
      const evolutionChainData = await fetchData(newID, "evolutionChain");
      const pokedexData = await fetchData(newID, "pokedex");

      const poketMonster = { ...poketMonsterData };
      const evolutionChain = { ...evolutionChainData };
      const pokedex = { ...pokedexData };

      return { poketMonster, evolutionChain, pokedex };
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
