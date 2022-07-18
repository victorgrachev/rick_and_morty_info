import React from 'react';

export function CardCharacter({
  character: { name, image, gender, species, status, type, origin },
}) {
  return (
    <div className="card large blue-grey darken-1 hoverable">
      <div className="card-image">
        <img src={image} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content white-text">
        <p>{`Пол: ${gender}`}</p>
        <p>{`Разновидность: ${species}`}</p>
        <p>{`Статус: ${status}`}</p>
        <p>{`Тип: ${type}`}</p>
        <p>{`Происхождение: ${origin.name}`}</p>
      </div>
    </div>
  );
}
