import React from 'react';
import loadable from '@loadable/component';
import { Button } from 'ui_library/components';
import GlobalStyle from './global-style';
import logo from './static/vector/logo.svg';
import { Container, Image } from './App.style';

// https://loadable-components.com/docs/prefetching/
const DynamicImport = loadable(() => import('./DynamicImport'));

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Image src={logo} alt="logo" />
        <DynamicImport />
        <Button title="Learn React" href="https://reactjs.org" as="a" target="_blank" rel="noopener noreferrer" />
      </Container>
    </>
  );
};

export default App;
