import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../app';

describe('app', () => {
  it('renders', () => {
    const render = TestRenderer.create(<App>Stuff</App>);
    console.log(render.toJSON());
  });
});
