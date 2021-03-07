import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

// Mount function to start up the aoo
const mount = (el) => {
  const history = createMemoryHistory();

  ReactDOM.render(<App history={history} />, el);
};

// If in development and in isolation
// Call mount immeidately

if (process.env.NODE_ENV) {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Export the mount function for cases when working through container

export { mount };
