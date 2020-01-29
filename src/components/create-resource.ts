function createResource(load: (...args: any[]) => Promise<any>) {
  let promise: Promise<any> | null = null;
  let result: any = undefined;
  let error: any = undefined;

  async function executeLoad(...args: any[]) {
    try {
      result = await load(...args);
    } catch (err) {
      error = err;
    }
  }

  return {
    read(...args: any[]) {
      if (!promise) {
        promise = executeLoad(...args);
      }

      if (result !== undefined) {
        return result;
      } else if (error !== undefined) {
        throw error;
      } else {
        throw promise;
      }
    }
  };
}

export default createResource;
