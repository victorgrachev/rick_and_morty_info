import React from 'react';
import { NavLink } from 'react-router-dom';

function SeriesList({ list }) {
  return (
    <div className="col">
      {list.map((info, indx) => (
        <div className="card text-center mb-3" key={indx}>
          <div className="card-header">
            <NavLink className="nav-link" to={`/episode/${indx}`}>
              {`${info.episode.match(/S.+E(.+)/)[1]} ${info.name}`}
            </NavLink>
          </div>
          <div className="card-body">
            <h5 className="card-title">{`Дата выхода: ${info.air_date}`}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeriesList;
