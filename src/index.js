import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import routes from './Routes/routes';
import { Route, BrowserRouter } from 'react-router-dom';

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
