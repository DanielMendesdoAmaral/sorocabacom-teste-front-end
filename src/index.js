import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//CSS
import './index.css';

//Páginas
import LandingPage from './pages/landingpage/landingpage';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();