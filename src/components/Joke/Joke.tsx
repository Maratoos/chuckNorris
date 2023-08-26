import { FC } from "react";
import "./index.css";
import { IJoke } from "../../models/types";
import { formatDate } from "../../hooks/UseDate";

interface Props {
  big: boolean;
  joke: IJoke;
}

export const Joke: FC<Props> = ({ big, joke }) => {
  return (
    <>
      {big ? (
        <div key={joke.id} className="joke-holder big">
          <div className="joke-top">
            <p className="joke-top__value">{joke.value}</p>
          </div>
          <div className="joke-bottom">
            <p className="joke-bottom__id">
              <a href={joke.url}>{joke.id}</a>
            </p>
            <p className="joke-bottom__createdAt">
              {formatDate(joke.created_at)}
            </p>
          </div>
        </div>
      ) : (
        <div key={joke.id} className="joke-holder small">
          <div className="joke-top-small">
            <p className="joke-top__value-small">{joke.value}</p>
          </div>
          <div className="joke-bottom-small">
            <p className="joke-bottom__id smallId">
              <a href={joke.url}>{joke.id}</a>
            </p>
            <p className="joke-bottom__createdAt smallCreatedAt">
              {formatDate(joke.created_at)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
