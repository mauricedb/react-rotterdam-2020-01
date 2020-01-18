import React from "react";
import chuckJokesResource from "./chuck-jokes-resource";

type Joke = { id: number; joke: string };
type ChuckJokesProps = { delay: number };

const ChuckJokes: React.FC<ChuckJokesProps> = ({ delay }) => {
  const jokes = chuckJokesResource.read("/api/chuck-norris.json", delay) as Joke[];

  return (
    <div>
      <h2>Chuck Norris Jokes</h2>
      <ul>
        {jokes.map((item: Joke) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChuckJokes;
