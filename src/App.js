import React from 'react';

import Header from './components/template/Header';
import Footer from './components/template/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wraper">
        <p>Conteudo</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
