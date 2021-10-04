import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import '@babel/polyfill';

render(<App />, document.querySelector('#app'));
