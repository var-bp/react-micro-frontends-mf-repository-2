// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { match } from 'react-router';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import { History } from 'history';
import App from './App';

export const mountFunction = (
  mountPoint: ReactDOM.Container | null,
  history?: History,
  parentRouteMatch?: match,
): void => {
  ReactDOM.render(
    <StrictMode>
      <>
        {history && parentRouteMatch ? (
          <Router history={history}>
            <Route path={parentRouteMatch.path}>
              <App />
            </Route>
          </Router>
        ) : (
          <BrowserRouter>
            <Route path="/repository-2">
              <App />
            </Route>
          </BrowserRouter>
        )}
      </>
    </StrictMode>,
    mountPoint,
  );
};

export const unmountFunction = (mountPoint: Element | DocumentFragment): void => {
  ReactDOM.unmountComponentAtNode(mountPoint);
};

// If we are in isolation, call mountFunction immediately
const mountPoint = document.querySelector('#react-micro-frontends-mf-repository-2');
if (mountPoint) mountFunction(mountPoint);
