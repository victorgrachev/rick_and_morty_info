import {
  LOAD_DATA,
  SELECT_SEASON,
  GET_INFO_CHARACTER,
  CLEAN_INFO_CHARACTER,
} from './types';

const handlers = {
  DEFAULT: (state) => state,
  [LOAD_DATA]: (state, { payload }) => ({
    ...state,
    seasons: payload,
    loading: false,
  }),
  [SELECT_SEASON]: (state, { payload }) => ({
    ...state,
    selectSeries: payload,
  }),
  [GET_INFO_CHARACTER]: (state, { payload }) => ({
    ...state,
    infoCharacter: payload,
  }),
  [CLEAN_INFO_CHARACTER]: (state) => ({
    ...state,
    infoCharacter: [],
  }),
};

export const serialInfoReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
