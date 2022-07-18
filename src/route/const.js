export const ROUTES = {
  MAIN: { path: '/' },
  EPISODES: { path: '/episodes' },
  PAGE_EPISODES: {
    path: '/episodes/page/:numPage',
    getPath: (page) => `/episodes/page/${page}`,
  },
  PAGE_CHARACTER: {
    path: '/characters/:idCharacters',
    getPath: (idCharacters) => `/characters/${idCharacters}`,
  },
};
