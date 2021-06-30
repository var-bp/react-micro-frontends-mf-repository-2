import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { match } from 'react-router';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import { History } from 'history';
import { EventEmitterProvider } from 'root/EventEmitterProvider';
import App from './App';

export const mountFunction = (
  mountPoint: ReactDOM.Container | null,
  eventEmitter: any,
  history?: History,
  parentRouteMatch?: match,
): void => {
  ReactDOM.render(
    <StrictMode>
      <EventEmitterProvider eventEmitter={eventEmitter}>
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
      </EventEmitterProvider>
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
