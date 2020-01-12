export const sleep = (delay: number) =>
  new Promise(respolve => setTimeout(respolve, delay));
