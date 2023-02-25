"use client";

import { sanitizeName } from "../../../utilities/text";
import { Text } from "../atoms";
import { useState, useEffect } from "react";

function PokemonLine({ id, data, label, unit = "" }) {
  return (
    <div key={id} className="flex items-center py-2">
      {label && (
        <Text className="text-xl font-medium px-2" message={`${label}:`} />
      )}
      {data && <Text className="text-xl px-2" message={`${data} ${unit}`} />}
    </div>
  );
}

export default function PokemonData({ poketMonster, evolutionChain }) {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [evolutionChain, poketMonster]);

  if (!evolutionChain) return;

  const abilities =
    poketMonster &&
    poketMonster.abilities.map((ability) => {
      const name = sanitizeName(ability.ability.name);
      return (
        <li key={name} className="list-disc">
          <PokemonLine id={name} data={name} />
        </li>
      );
    });

  const moves =
    poketMonster &&
    poketMonster.moves.slice(0, 3).map((move) => {
      const name = sanitizeName(move.move.name);
      return (
        <li key={name} className="list-disc">
          <PokemonLine id={name} data={name} />
        </li>
      );
    });

  const evolutions =
    evolutionChain?.chain?.evolves_to.length > 0
      ? evolutionChain.chain.evolves_to.map((evolution) => {
          const name = sanitizeName(evolution.species.name);
          return (
            <li key={name} className="list-disc">
              <PokemonLine id={name} data={name} />
            </li>
          );
        })
      : "N/A";

  return (
    <div
      className={`px-4 min-w-full flex flex-col ${
        showContent
          ? "opacity-100 transform translate-x-0 transition-all duration-400"
          : "opacity-0 transform translate-x-24 transition-all duration-400"
      }`}
    >
      {poketMonster && (
        <PokemonLine
          id={poketMonster.name}
          data={poketMonster.weight}
          label="Weight"
          unit="Kg"
        />
      )}

      <PokemonLine label="Abilities" />
      <ul className="px-10">{abilities}</ul>

      <PokemonLine label="Moves" />
      <ul className="px-10">{moves}</ul>

      <PokemonLine label="Evolutions" />
      <ul className="px-10">{evolutions}</ul>
    </div>
  );
}
