import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

function renderButton(props = {}) {
  return shallow(<Button {...props} />);
}

describe('Button', () => {
  it('renders', () => {
    expect(renderButton).not.toThrow();
  });

  it('renders with provided text', () => {
    const DUMMY_TEXT = 'Some Text';
    const button = renderButton({children: DUMMY_TEXT});
    expect(button.contains(DUMMY_TEXT)).toBe(true);
    expect(button).toMatchSnapshot();
  });
});
