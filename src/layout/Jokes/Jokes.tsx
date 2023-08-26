import { FC } from "react";
import { Joke } from "../../components/Joke/Joke";
import "./index.css";
import { useAppSelector } from "../../hooks/redux";

export const Jokes: FC = () => {
  const { jokes } = useAppSelector((state) => state.jokeReducer);

  return (
    <div className="jokes-holder">
      {Array.isArray(jokes) &&
        jokes.length > 0 &&
        jokes.map((joke, id) => (
          <Joke
            big={joke.value.length > 150 || id === 0 || id === 1}
            joke={joke}
          />
        ))}
    </div>
  );
};
