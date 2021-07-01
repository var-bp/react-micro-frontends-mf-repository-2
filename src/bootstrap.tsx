import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { match } from 'react-router';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import { History } from 'history';
import EventEmitter3 from 'eventemitter3';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

export const mountFunction = (
  mountPoint: ReactDOM.Container | null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventEmitter: EventEmitter3<string | symbol, any>,
  history?: History,
  parentRouteMatch?: match,
): void => {
  ReactDOM.render(
    <StrictMode>
      <ErrorBoundary>
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
      </ErrorBoundary>
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
