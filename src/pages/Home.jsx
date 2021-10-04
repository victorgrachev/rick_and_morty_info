import React from 'react';

function Home() {
  const style = { color: 'white' };
  return (
    <div className="container p-0" style={style}>
      <h1 className="display-4 Light">Информация о сериале Rick and Morty</h1>
      <p className="lead">
        Версия приложения <strong>1.0.1</strong>
      </p>
    </div>
  );
}

export default Home;
