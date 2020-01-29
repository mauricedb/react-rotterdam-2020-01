import createResource from "./create-resource";

const jokesResource = createResource(async (url: string) => {
  const rsp = await fetch(url);
  const jokes = await rsp.json();

  return jokes;
});

export default jokesResource;
