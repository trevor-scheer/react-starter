// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

const $root = document.getElementById('root');
if ($root != null) {
  ReactDOM.render(<App />, $root);
}
