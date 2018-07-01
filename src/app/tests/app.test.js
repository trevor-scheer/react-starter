import React from 'react';
import {shallow} from 'enzyme';
import App from '../app';

describe('App', () => {
  it('renders', () => {
    expect(() => shallow(<App />)).not.toThrow();
  });
});
