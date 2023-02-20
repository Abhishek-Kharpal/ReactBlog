import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App():JSX.Element {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
