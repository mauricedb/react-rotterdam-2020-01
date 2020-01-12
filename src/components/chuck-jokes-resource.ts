import { sleep } from "./sleep";

// import createResource from "./create-resource";
const createResource = (load: (...args: any[]) => Promise<any>) => ({
  read(...args: any[]): any {
    return [];
  }
});

const jokesResource = createResource(async (url: string, delay: number) => {
  const rsp = await fetch(url);
  const jokes = await rsp.json();

  if (delay) {
    await sleep(delay);
  }

  return jokes;
});

export default jokesResource;
