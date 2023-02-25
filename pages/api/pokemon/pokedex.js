export default async function pokedex(req, res) {
  const { id } = req.query;

  const pokedexResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const pokedex = await pokedexResponse.json();
  const data = { ...pokedex };

  res.status(200).json(data);
  //@todo: add error handling as in vetdesk
}
