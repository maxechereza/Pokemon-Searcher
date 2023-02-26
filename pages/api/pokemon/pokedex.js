export default async function pokedex(req, res) {
  const { id } = req.query;

  try {
    const pokedexResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );

    const pokedex = await pokedexResponse.json();
    const data = { ...pokedex };

    res.status(200).json({ success: true, data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
}
