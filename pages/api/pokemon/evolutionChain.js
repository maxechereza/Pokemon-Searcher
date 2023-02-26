export default async function evolutionChain(req, res) {
  const { id } = req.query;

  try {
    const evolutionChainResponse = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}`
    );

    const evolutionChain = await evolutionChainResponse.json();
    const chain = { ...evolutionChain };

    res.status(200).json({ success: true, data: { chain } });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
}
