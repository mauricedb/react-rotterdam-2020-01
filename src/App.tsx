import React, {
  Suspense,
  StrictMode,
  useTransition,
  SuspenseList
} from "react";
import "./App.css";
// import Jokes from "./components/jokes";
import ChuckJokes from "./components/chuck-jokes";
import Loading from "./components/loading";

const Jokes = React.lazy(() => import("./components/jokes"));

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);
  const [startTransition] = useTransition();

  return (
    <StrictMode>
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              // onChange={e => setDisplayJokes(e.target.checked)}
              onChange={e =>
                startTransition(() => setDisplayJokes(e.target.checked))
              }
              autoFocus
            />
            Display jokes
          </label>
        </div>
        {displayJokes && (
          <SuspenseList revealOrder="forwards" tail="collapsed">
            <>
              <Suspense fallback={<Loading />}>
                <ChuckJokes delay={2000} />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <Jokes url="/api/jon-skeet.json" />
              </Suspense>
            </>
          </SuspenseList>
        )}
        <div>
          <a
            href="http://timeslicing-unstable-demo.surge.sh/"
            target="async-demo"
          >
            Async demo
          </a>
        </div>
      </div>
    </StrictMode>
  );
};

export default App;
