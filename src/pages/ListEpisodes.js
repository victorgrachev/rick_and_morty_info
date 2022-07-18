import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { CardEpisode } from '../components/CardEpisode';
import { useEpisodes } from '../hooks/useEpisodes';

export function ListEpisodes() {
  const { numPage } = useParams();
  const { episodes, loading } = useEpisodes(numPage);

  if (loading) {
    return (
      <div className="section center-align">
        <Loader />
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          {episodes.map((episode) => (
            <div key={episode.id} className="col s12 m6">
              <CardEpisode episode={episode} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
