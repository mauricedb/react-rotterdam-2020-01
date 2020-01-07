import React from "react";

const useFetch = <T extends any>(url: string) => {
  type State = {
    data: T | null;
    loading: boolean;
  };

  const [{ data, loading }, setState] = React.useState<State>({
    data: null,
    loading: true
  });

  React.useEffect(() => {
    const fetchJokes = async () => {
      const rsp = await fetch(url);
      const data = await rsp.json();
      setState({ data, loading: false });
    };
    fetchJokes();
  }, [url]);

  return { loading, data };
};

export default useFetch;
