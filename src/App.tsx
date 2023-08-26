import { FC, useRef, useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Jokes } from "./layout/Jokes/Jokes";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getJokeByQuery } from "./store/reducers/JokeRequest";

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const { jokes, isLoading, error } = useAppSelector(
    (state) => state.jokeReducer
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value.trim());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(getJokeByQuery(value));
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (value.length > 3) {
      dispatch(getJokeByQuery(value));
    }
  }, [value]);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="input-holder">
          <form onSubmit={handleSubmit}>
            <input
              required
              placeholder="Введите свой запрос"
              className="mainInput"
              onChange={handleChange}
              ref={inputRef}
              type="text"
            />
          </form>
          {<p className="totalJokes">Found jokes: {jokes.length}</p>}
        </div>
        {!isLoading && !error && jokes.length > 0 && <Jokes />}
        {!isLoading && !error && !jokes.length && (
          <p
            style={{ textAlign: "center", marginTop: "80px" }}
            className="someText"
          >
            Шуток нет :\
          </p>
        )}
        {isLoading && !error && (
          <p
            style={{ textAlign: "center", marginTop: "80px" }}
            className="someText"
          >
            Загрузка...
          </p>
        )}
        {!isLoading && !jokes.length && error && (
          <p
            style={{ textAlign: "center", marginTop: "80px", color: "red" }}
            className="someText"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
