import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//CSS
import './index.css';

//Páginas
import Landpage from './pages/landpage/landpage';

ReactDOM.render(
  <React.StrictMode>
    <Landpage/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();