// @flow
import React, {type ComponentType, type Node} from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: Node,
  onClick?: (SyntheticMouseEvent<HTMLButtonElement>) => void
};

const Button: ComponentType<ButtonProps> = styled.button`
  padding: 8px 16px;
  background-color: #5500bb;
  color: #000000;
`;

export default Button;
