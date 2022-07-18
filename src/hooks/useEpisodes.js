import { useEffect, useState } from 'react';
import { useService } from './useService';
import React from 'react';

export function useEpisodes(page) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const service = useService();

  useEffect(() => {
    setLoading(true);

    service.getPageEpisodes(page).then((episodes) => {
      setEpisodes(episodes);
      setLoading(false);
    });
  }, [page]);

  return { loading, episodes };
}
