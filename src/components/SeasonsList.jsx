import React from 'react';
import { SerialInfoContext } from '../context/serialInfoContext.js';

function SeasonsList({ list }) {
  const { selectSeason } = React.useContext(SerialInfoContext);

  const onClick = (event) => {
    event.preventDefault();
    selectSeason(event.target.dataset.number);
  };

  return (
    <div className="col-4">
      <h1 className="display-4 text-light">Сезоны:</h1>
      <div className="list-group" id="list-tab" role="tablist">
        {list.map((season, indx) => (
          <a
            className="list-group-item list-group-item-action"
            id="list-home-list"
            data-bs-toggle="list"
            href="#"
            role="tab"
            aria-controls="list-home"
            data-number={season.number}
            onClick={onClick}
            key={indx}
          >
            {`Сезон ${season.number}. Количество серий - ${season.series.length}`}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SeasonsList;
