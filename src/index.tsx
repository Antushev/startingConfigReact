import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app/app';

const init = () => {
  ReactDOM.render(
    <App
      textHello="Привет, React и TypeScript!"
    />,
  document.querySelector('#root')
  );
};

init();
