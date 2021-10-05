import React from 'react';
import { SerialInfoContext } from '../context/serialInfoContext';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader.jsx';

function Episode() {
  const { episodeIndex } = useParams();
  const {
    selectSeries,
    infoCharacter,
    getInfoCharacter,
    cleanInfoCharacter,
  } = React.useContext(SerialInfoContext);

  React.useEffect(() => {
    getInfoCharacter(episodeIndex);
    return () => cleanInfoCharacter();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <p>{`Номер эпизода: ${selectSeries[episodeIndex].episode}`}</p>
        <p>{`Дата выпуска эпизода: ${selectSeries[episodeIndex].air_date}`}</p>
        <p>{`Название эпизода: ${selectSeries[episodeIndex].name}`}</p>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>Информация о персонажах:</p>
          {infoCharacter.length === 0 ? (
            <Loader />
          ) : (
            <div className="d-flex justify-content-start flex-wrap">
              {infoCharacter.map((character, indx) => (
                <blockquote
                  className="blockquote p-2"
                  style={{ flexBasis: '20%' }}
                  key={indx}
                >
                  <img src={character.image} />
                  <p>{character.name}</p>
                  {character.gender ? (
                    <footer className="blockquote-footer">{`Пол: ${character.gender}`}</footer>
                  ) : (
                    ''
                  )}
                  {character.species ? (
                    <footer className="blockquote-footer">{`Разновидность: ${character.species}`}</footer>
                  ) : (
                    ''
                  )}
                  {character.status ? (
                    <footer className="blockquote-footer">{`Статус: ${character.status}`}</footer>
                  ) : (
                    ''
                  )}
                  {character.type ? (
                    <footer className="blockquote-footer">{`Тип: ${character.type}`}</footer>
                  ) : (
                    ''
                  )}
                  <footer className="blockquote-footer">{`Происхождение: ${character.origin.name}`}</footer>
                </blockquote>
              ))}
            </div>
          )}
        </blockquote>
      </div>
    </div>
  );
}

export default Episode;
