import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Episodes } from '../pages/Episodes';
import { ListEpisodes } from '../pages/ListEpisodes';
import { Characters } from '../pages/Characters';
import { ROUTES } from './const';

export function Router() {
  return useRoutes([
    {
      path: ROUTES.MAIN.path,
      element: <Home />,
    },
    {
      path: ROUTES.EPISODES.path,
      element: <Episodes />,
      children: [
        {
          path: ROUTES.EPISODES.path,
          element: <Navigate to={ROUTES.PAGE_EPISODES.getPath(1)} />,
        },
        {
          path: ROUTES.PAGE_EPISODES.path,
          element: <ListEpisodes />,
        },
      ],
    },
    {
      path: ROUTES.PAGE_CHARACTER.path,
      element: <Characters />,
    },
    {
      path: '*',
      element: <Navigate to={ROUTES.MAIN.path} />,
    },
  ]);
}
