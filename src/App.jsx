import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Series from './pages/Series.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <div
          className="container-fluid p-4 flex-grow-1"
          style={{ background: 'rgb(32, 35, 41) none repeat scroll 0% 0%' }}
        >
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/series'} component={Series} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
