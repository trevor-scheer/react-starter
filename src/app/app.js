// @flow
import React, {type ComponentType} from 'react';
import styled from 'styled-components';

type Props = {
  children?: string
};

type ButtonProps = {
  children: string
};

const Button: ComponentType<ButtonProps> = styled.button`
  padding: 20px 5px;
  background-color: orange;
  color: white;
`;

const App = ({children = 'App Works!'}: Props) => (
  <div className="App">
    <Button>{children}</Button>
  </div>
);

export default App;
