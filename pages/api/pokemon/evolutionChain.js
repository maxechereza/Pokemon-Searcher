export default async function evolutionChain(req, res) {
  const { id } = req.query;

  const evolutionChainResponse = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${id}`
  );

  const evolutionChain = await evolutionChainResponse.json();
  const chain = { ...evolutionChain };

  res.status(200).json(chain);
  //@todo: add error handling as in vetdesk
}
