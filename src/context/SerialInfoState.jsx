import React from 'react';
import {
  LOAD_DATA,
  SELECT_SEASON,
  GET_INFO_CHARACTER,
  CLEAN_INFO_CHARACTER,
} from './types';
import { SerialInfoContext } from './serialInfoContext';
import { serialInfoReducer } from './serialInfoReducer';

function SerialInfoState({ children }) {
  const initialState = {
    seasons: [],
    selectSeries: [],
    infoCharacter: [],
    loading: true,
  };
  const [state, dispatch] = React.useReducer(serialInfoReducer, initialState);

  const loadData = async () => {
    const resultData = [];
    let url = process.env.API_URL;

    if (state.loading) {
      do {
        const response = await fetch(url);
        const json = await response.json();
        json.results.forEach((data) => resultData.push(data));
        url = json.info.next;
      } while (url);

      const mapSeasonIndx = new Map();
      const payload = [];
      resultData.forEach((data) => {
        const numberSeason = data.episode.match(/S(.+)E/)[1];

        if (!mapSeasonIndx.has(numberSeason)) {
          const indx =
            payload.push({ number: numberSeason, series: [data] }) - 1;
          mapSeasonIndx.set(numberSeason, indx);
        } else {
          payload[mapSeasonIndx.get(numberSeason)].series.push(data);
        }
      });

      dispatch({ type: LOAD_DATA, payload });
    }
  };

  const selectSeason = (numberSeason) => {
    const payload = state.seasons.filter(
      (season) => season.number === numberSeason
    )[0].series;
    dispatch({ type: SELECT_SEASON, payload });
  };

  const getInfoCharacter = async (indxSelectSeries) => {
    const urlCharacters = state.selectSeries[indxSelectSeries].characters;
    const payload = [];

    for (let url of urlCharacters) {
      const response = await fetch(url);
      const json = await response.json();
      payload.push(json);
    }

    dispatch({ type: GET_INFO_CHARACTER, payload });
  };

  const cleanInfoCharacter = () => {
    dispatch({ type: CLEAN_INFO_CHARACTER });
  };

  const searchSeries = (name) => {
    const payload = [];

    if (name) {
      state.seasons.forEach((season) => {
        season.series.forEach((value) => {
          const regExp = new RegExp('.*' + name.toUpperCase() + '.*');
          if (regExp.test(value.name.toUpperCase())) {
            payload.push(value);
          }
        });
      });
    }

    dispatch({ type: SELECT_SEASON, payload });
  };

  const value = {
    seasons: state.seasons,
    loading: state.loading,
    selectSeries: state.selectSeries,
    infoCharacter: state.infoCharacter,
    loadData,
    selectSeason,
    getInfoCharacter,
    cleanInfoCharacter,
    searchSeries,
  };
  return (
    <SerialInfoContext.Provider value={value}>
      {children}
    </SerialInfoContext.Provider>
  );
}

export default SerialInfoState;
