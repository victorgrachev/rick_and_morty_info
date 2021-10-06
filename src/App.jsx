import './App.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Series from './pages/Series.jsx';
import Episode from './pages/Episode.jsx';
import SerialInfoState from './context/SerialInfoState.jsx';

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <div
          className="container-fluid p-4 flex-grow-1"
          style={{ background: 'rgb(32, 35, 41) none repeat scroll 0% 0%' }}
        >
          <Switch>
            <Route path={'/'} exact component={Home} />
            <SerialInfoState>
              <Route path={'/episode/:episodeIndex'} component={Episode} />
              <Route path={'/series'} component={Series} />
            </SerialInfoState>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
