import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import { CardCharacter } from '../components/CardCharacter';

export function Characters() {
  const { idCharacters } = useParams();
  const characters = useCharacters(idCharacters);

  return (
    <div>
      <div className="row">
        {characters.map((character) => (
          <div key={character.id} className="col s2">
            <CardCharacter character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}
