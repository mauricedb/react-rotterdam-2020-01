import React from "react";
import "./App.css";
import Jokes from "./components/jokes";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={displayJokes}
            onChange={() => setDisplayJokes(!displayJokes)}
            autoFocus
          />
          Display jokes
        </label>
      </div>
      {displayJokes && <Jokes url="/api/jon-skeet.json" />}
      <div>
        <a
          href="http://timeslicing-unstable-demo.surge.sh/"
          target="async-demo"
        >
          Async demo
        </a>
      </div>
    </div>
  );
};

export default App;
