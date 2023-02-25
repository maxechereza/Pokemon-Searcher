const confirmPokemonImage = async (id) => {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  try {
    const response = await fetch(src);
    return response.ok &&
      response.headers.get("content-type").startsWith("image/")
      ? true
      : false;
  } catch (error) {
    console.error("Error checking image URL:", error);
    return false;
  }
};

export default async function get(req, res) {
  let { id } = req.query;
  let pokemonConfirmed = await confirmPokemonImage(id);

  while (!pokemonConfirmed) {
    id++;
    pokemonConfirmed = await confirmPokemonImage(id);
  }

  const poketMonsterResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  const poketMonster = await poketMonsterResponse.json();
  const pokemon = { ...poketMonster };

  res.status(200).json({ pokemon, id });
  //@todo: add error handling as in vetdesk
}
