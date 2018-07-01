// @flow
import React, {
  type ComponentType,
  type StatelessFunctionalComponent,
  type Node
} from 'react';
import styled from 'styled-components';
import Button from './components/Button';

type AppProps = {
  children?: Node
};

const StyledApp: ComponentType<AppProps> = styled.div`
  width: 100vw;
  height: 100vh;
`;

type PageContentProps = {
  children?: Node
};

const PageContent: ComponentType<PageContentProps> = styled.div`
  padding: 0 32px;
`;

const handleClick = e => {
  console.log('clicked', e.currentTarget);
};

const App: StatelessFunctionalComponent<{}> = () => (
  <StyledApp>
    <PageContent>
      <Button onClick={handleClick}>Click me</Button>
    </PageContent>
  </StyledApp>
);

export default App;
