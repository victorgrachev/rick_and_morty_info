import React from 'react';
import SeasonsList from '../components/SeasonsList.jsx';
import SeriesList from '../components/SeriesList.jsx';
import { SerialInfoContext } from '../context/serialInfoContext.js';
import Loader from '../components/Loader.jsx';

function Series() {
  const {
    seasons,
    selectSeries,
    loading,
    loadData,
    searchSeries,
  } = React.useContext(SerialInfoContext);
  React.useEffect(() => loadData(), []);

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <input
          className="form-control"
          type="text"
          placeholder="Введите название серии для поиска"
          aria-label="default input example"
          onChange={(event) => searchSeries(event.target.value)}
        />
      </div>
      <div className="row">
        {!loading ? <SeasonsList list={seasons} /> : <Loader />}
        <SeriesList list={selectSeries} />
      </div>
    </div>
  );
}

export default Series;
