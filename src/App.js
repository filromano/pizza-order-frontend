import './App.scss';

import React from 'react';

import Header from './components/template/Header/';
import Footer from './components/template/Footer/';
import PizzaForm from  './components/PizzaForm/';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="content-wrapper">
        <PizzaForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
