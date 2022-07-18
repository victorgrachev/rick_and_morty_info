import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../route';

const URL_CHARACTER = 'https://rickandmortyapi.com/api/character/';

export function CardEpisode({ episode }) {
  const { name, episode: numberEpisode, air_date, characters } = episode;

  return (
    <div className="card small blue-grey darken-1 hoverable">
      <div className="card-content white-text">
        <span className="card-title">{name}</span>
        <p>{`Номер эпизода: ${numberEpisode}`}</p>
        <p>{`Дата выпуска эпизода: ${air_date}`}</p>
      </div>
      <div className="card-action">
        <Link
          to={ROUTES.PAGE_CHARACTER.getPath(
            characters.map((url) => url.replace(URL_CHARACTER, '')).join(',')
          )}
        >
          Список персонажей
        </Link>
      </div>
    </div>
  );
}
