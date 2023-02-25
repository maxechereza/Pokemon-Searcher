"use client";

import { Card, Text } from "../atoms";
import Image from "next/image";
import { sanitizeName } from "../../../utilities/text";
import { useState, useEffect } from "react";

export default function PokemonCard({ poketMonster }) {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 400);

    //Always remember to clean yourself!: https://maxechereza.com/react-hooks-part-1/
    return () => clearTimeout(timer);
  }, [poketMonster]);

  //@todo: add fallback
  if (!poketMonster) return;

  const pokemonName = poketMonster && sanitizeName(poketMonster.name);
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poketMonster.id}.svg`;

  return (
    <Card bgColor="white" shadow="lg">
      <div
        className={`flex flex-col ${
          showContent
            ? "opacity-100 transform translate-x-0 transition-all duration-400"
            : "opacity-0 transform -translate-x-24 transition-all duration-400"
        }`}
      >
        <Image
          src={src}
          width={300}
          height={300}
          alt={`${pokemonName} Image`}
        />
        <Text className="text-7xl text-center" message={pokemonName} />
      </div>
    </Card>
  );
}
