import React from "react";
import jokesResource from "./jokes-resource";

type Joke = { id: number; joke: string };
type JokesProps = { url: string };

const Jokes: React.FC<JokesProps> = ({ url }) => {
  const jokes = jokesResource.read(url) as Joke[];

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
