import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory ? defaultHistory() : createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate(location) {
      const { pathname: currentPathname } = history.location;

      const { pathname: nextPathname } = location;

      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If in development and in isolation
// Call mount immeidately

if (process.env.NODE_ENV) {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory });
  }
}

// Export the mount function for cases when working through container

export { mount };
