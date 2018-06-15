import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import routes from './Routes/routes';
import { Route, BrowserRouter } from 'react-router-dom';
import './styles/scss/material-kit-react.css?v=1.1.0';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      {
        routes.map((route, index) => (
          route.exact ?
          <Route path={route.path} component={route.component} exact/> :
          <Route path={route.path} component={route.component}/>
        ))
      }
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
