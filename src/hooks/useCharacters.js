const { useState, useEffect } = require('react');
const { useService } = require('./useService');

export function useCharacters(idCharacters) {
  const [characters, setCharacters] = useState([]);
  const service = useService();

  useEffect(() => {
    service.getInfoCharacters(idCharacters).then((data) => {
      setCharacters(data);
    });
  }, [idCharacters]);

  return characters;
}
