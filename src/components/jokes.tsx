import React from "react";
import Loading from "./loading";
import useFetch from "./use-fetch";

type Joke = { id: number; joke: string };
type JokesProps = { url: string };

const Jokes: React.FC<JokesProps> = ({ url }) => {
  const { loading, data: jokes } = useFetch<Joke[]>(url);

  if (loading || !jokes) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Jon Skeet Jokes</h2>
      <ul>
        {jokes.map((item: Joke) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
