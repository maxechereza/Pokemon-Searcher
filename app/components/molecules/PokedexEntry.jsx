import { Card, Text } from "../atoms";
import Image from "next/image";
import { sanitizeName } from "../../../utilities/text";
import { useState, useEffect } from "react";

export default function PokedexEntry({ pokedex }) {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 400);

    //Always remember to clean yourself!: https://maxechereza.com/react-hooks-part-1/
    return () => clearTimeout(timer);
  }, [pokedex]);

  if (!pokedex) return;

  console.log(pokedex);

  const [pokedexDescription] = pokedex ? pokedex.flavor_text_entries : [];

  return (
    <div
      className={`text-ellipsis ${
        showContent
          ? "opacity-100 transform translate-x-0 transition-all duration-400"
          : "opacity-0 transform -translate-x-24 transition-all duration-400"
      }`}
    >
      <Text>{pokedexDescription?.flavor_text.replace(/[\f]/g, " ")}</Text>
    </div>
  );
}
