import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner>
        <h2>Los panchos más simpaticos</h2>
        <p>Pedi online!</p>
      </Banner>
    </>
  );
}

export default App;
